package com.projectride

import com.facebook.react.ReactRootView
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView
import org.devio.rn.splashscreen.SplashScreen // import for react-native-splash-screen >= 0.3.1
// import com.cboy.rn.splashscreen.SplashScreen // import for react-native-splash-screen < 0.3.1

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ProjectRide"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
      return object : DefaultReactActivityDelegate(this, mainComponentName) {
          override fun createRootView(): ReactRootView {
              return RNGestureHandlerEnabledRootView(this@MainActivity)
          }
      }
  }

  /**
   * Add onCreate method to show the splash screen
   */
  override fun onCreate(savedInstanceState: Bundle?) {
      SplashScreen.show(this)
      super.onCreate(savedInstanceState)
  }
}