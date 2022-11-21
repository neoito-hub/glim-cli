# E2E

E2E is one of the major pillars of enterprise-level mobile application development. Glim coming with a pack of E2E facility. At the initial project setup, E2E is not activated with glim. But you can easily configure the testing framework. Just have a look at how can we do that.

# Detox

In glim, we are using detox for E2E and automation. Detox is the widely used gray box e2e framework developed by Wix. you can read official doc of detox from [here..](https://wix.github.io/Detox/)

## Global Configuration

Before Starting using Detox you need some Global Configurations

- Install Detox CLI

```bash
npm install detox-cli --global
```

- Install applesimutils [Only for Mac Users]

```bash
brew tap wix/brew
brew install applesimutils
```

## Project Configuration

- Install Dependencies

```bash
npm install detox --save-dev
```

Detox work along with jest, so we need to install that

```bash
npm install "jest@^29" --save-dev
```

- Initialize Detox

```bash
detox init
```

This will create some files like this

```bash
.detoxrc.js
e2e/jest.config.js
e2e/starter.test.js
```

## Device Configurations

- First open the .detoxrc.js and add the emulators installed in your device like this..

```js
/** @type {Detox.DetoxConfig} */
module.exports = {
  // ...
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 12",
      },
    },
    attached: {
      type: "android.attached",
      device: {
        adbName: ".*", // any attached device
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_3a_API_30_x86",
      },
    },
  },
};
```

### check emulator list

For android

```bash
emulator -list-avds
```

For Ios

```bash
xcrun simctl list devicetypes
```

## App Config

In the .detoxrc.js file edit the paths based on your directory.

### Android

```js
module.exports = {
  apps: {
    "android.debug": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      build:
        "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug",
    },
    "android.release": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      build:
        "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release",
    },
    // ...
  },
  // ...
};
```

### Ios

````js
   apps: {
     'ios.debug': {
       type: 'ios.app',
-      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/YOUR_APP.app',
+      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/example.app',
-      build: 'xcodebuild -workspace ios/YOUR_APP.xcworkspace -scheme YOUR_APP -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
+      build: 'xcodebuild -workspace ios/example.xcworkspace -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
     },
     'ios.release': {
       type: 'ios.app',
-      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/YOUR_APP.app',
+      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/example.app',
-      build: 'xcodebuild -workspace ios/YOUR_APP.xcworkspace -scheme YOUR_APP -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
+      build: 'xcodebuild -workspace ios/example.xcworkspace -scheme example -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
     },
     ```
````

## Android Configuration

You need to edit these files to complete configuration.

- Build scripts:
  - android/build.gradle
  - android/app/build.gradle
- Native test code:
  - android/app/src/androidTest/java/com/your.package/DetoxTest.java
- Manifests:
  - android/app/src/main/AndroidManifest.xml
  - android/app/src/main/res/xml/network_security_config.xml

### Build scripts

<!-- android/build.gradle -->

```gradle {title="android/build.gradle"}
 buildscript {
   ext {
     buildToolsVersion = "31.0.0"
     minSdkVersion = 21
     compileSdkVersion = 30
     targetSdkVersion = 30
+    kotlinVersion = 'X.Y.Z'
   }
 …
   dependencies {
     classpath("com.android.tools.build:gradle:7.1.1")
     classpath("com.facebook.react:react-native-gradle-plugin")
     classpath("de.undercouch:gradle-download-task:5.0.1")
+    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
 …

 allprojects {
   repositories {
   …
   google()
+  maven {
+    url("$rootDir/../node_modules/detox/Detox-android")
+  }
   maven { url 'https://www.jitpack.io' }
 }
```

```gradle {title="android/app/build.gradle"}
 …

 android {
   …
   defaultConfig {
     …
     versionCode 1
     versionName "1.0"
+    testBuildType System.getProperty('testBuildType', 'debug')
+    testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'
   …
   buildTypes {
     release {
       minifyEnabled true
       proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
+      proguardFile "${project(':detox').projectDir}/proguard-rules-app.pro"

       signingConfig signingConfigs.release
     }
   }
   …

 dependencies {
+  androidTestImplementation('com.wix:detox:+')
+  implementation 'androidx.appcompat:appcompat:1.1.0'
   implementation fileTree(dir: "libs", include: ["*.jar"])
```

### Native Test Code

```java {title="android/app/src/androidTest/java/com/<your.package>/DetoxTest.java"}
package com.<your.package>;

import com.wix.detox.Detox;
import com.wix.detox.config.DetoxConfig;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class DetoxTest {
    @Rule // (2)
    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);

    @Test
    public void runDetoxTests() {
        DetoxConfig detoxConfig = new DetoxConfig();
        detoxConfig.idlePolicyConfig.masterTimeoutSec = 90;
        detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60;
        detoxConfig.rnContextLoadTimeoutSec = (BuildConfig.DEBUG ? 180 : 60);

        Detox.runTests(mActivityRule, detoxConfig);
    }
}
```

### Manifests

```xml {title="android/app/src/main/res/xml/network_security_config.xml"}
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">10.0.2.2</domain>
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>
```

```xml {title="android/app/src/main/AndroidManifest.xml"}
 <manifest>
   <application
   …
+    android:networkSecurityConfig="@xml/network_security_config">
   </application>
 </manifest>
```

## Build the app

### Ios (Debug)

```bash
detox build --configuration ios.sim.debug
```

### Ios (Release)

```bash
detox build --configuration ios.sim.release
```

### Android (Debug)

```bash
detox build --configuration android.emu.debug
```

### Android (Release)

```bash
detox build --configuration android.emu.release
```

## Write a Test

For the first time may be there is a sample test suit in your project. go to e2e folder and delete that.
Then create a test file in e2e folder like this `e2e/sample.test.js`

```js {title="e2e/sample.test.js"}
describe("Example", () => {
  beforeAll(async () => {});

  beforeEach(async () => {});

  it("should test something", async () => {});
});
```

## Running Test

### Ios (Debug)

```bash
detox test --configuration ios.sim.debug
```

### Ios (Release)

```bash
detox test --configuration ios.sim.release
```

### Android (Debug)

```bash
detox test --configuration android.emu.debug
```

### Android (Release)

```bash
detox test --configuration android.emu.release
```
