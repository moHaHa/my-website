import Vue from 'vue'
import mhLayer from "./mh-layer/mh-layer.vue";
import mhLayers from "./mh-layers/mh-layers.vue";
import mhFitPointer from "./mh-fit-pointer/mh-fit-pointer.vue";
import mhRelativeSize from "./mh-relative-size/mh-relative-size";
Vue.component(mhLayer.name, mhLayer)
Vue.component(mhLayers.name, mhLayers)
Vue.component(mhFitPointer.name, mhFitPointer)
Vue.component(mhRelativeSize.name, mhRelativeSize)