import img1 from "../assets/projects-1.jpg";
import img2 from "../assets/projects-2.jpg";
import img3 from "../assets/projects-3.jpg";

export const projects = [
  {
    id: 0,
    title: "ColorPicker Library for Android",
    img: img1,
    details:
      "Simple, maintained and highly customizable Color Picker Library for Android. It is packed with ColorPicker Popup, Colorpicker dialogs and ColorPicker BottomSheet dialogs. ColorPicker Popup supports alpha and uses HSV (behind the scene) and allows you to set your defaults. It also supports Dark Mode and Material Theme and uses AndroidX. 🎨",
    technologies: ["Android", "Java", "XML", "Gradle"],
    sourceCode: "https://github.com/mrudultora/Colorpicker",
    link: "",
  },
  {
    id: 1,
    title: "Device Info",
    img: img2,
    details:
      "Device Info is a simple and very user-friendly Android application that gives you complete and detailed information about your mobile device with best user-interface. This app is useful for not only normal users but also for developers who build kernels or android apps. Device Info is packed with many features to give you all info regarding software and hardware of your android device like CPU, RAM, OS, Sensors, Storage, Battery, SIM, Bluetooth, Installed Apps, System Apps, Display, Camera, Thermal, Codecs, Inputs.",
    technologies: ["Android", "Java", "XML", "Gradle", "JSON", "Firebase"],
    sourceCode: "",
    link: "https://play.google.com/store/apps/details?id=com.toralabs.deviceinfo",
  },
  {
    id: 2,
    title: "Apk Extractor App",
    img: img3,
    details:
      "Apk Extractor is a fast and lightweight app to extract apk & the app icons from apps on your device. This Apk Extractor comes with many built-in features. It has options to sort the list of apps on the basis of System Apps and Installed Apps. Search Option is available to search apps present in device. Also supports Dark-Mode and Remove Ads functionality. Sorting also available on the basis of Alphabetical Order and Size of apk. It works lightning fast to extract apk from apps. It can extract system apps also.",
    technologies: ["Android", "Java", "XML", "Gradle"],
    sourceCode: "https://github.com/mrudultora/Apk-Extractor-Android-App",
    link: "https://play.google.com/store/apps/details?id=com.toralabs.apkextractor",
  },
];
