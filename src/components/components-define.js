import Vue from 'vue'
import mhLayer from "./mh-layer/mh-layer.vue";
import mhLayers from "./mh-layers/mh-layers.vue";
import mhFitPointer from "./mh-fit-pointer/mh-fit-pointer.vue";
import mhRelativeSize from "./mh-relative-size/mh-relative-size";
import mhMouseMoveingWrapper from "./mh-mouse-moveing-wrapper/mh-mouse-moveing-wrapper";
import mhMouseScaleWrapper from "./mh-mouse-scale-wrapper/mh-mouse-scale-wrapper";
import mhSelfUpDownWrapper from "./mh-self-up-down-wrapper/mh-self-up-down-wrapper";
Vue.component(mhLayer.name, mhLayer)
Vue.component(mhLayers.name, mhLayers)
Vue.component(mhFitPointer.name, mhFitPointer)
Vue.component(mhRelativeSize.name, mhRelativeSize)
Vue.component(mhMouseScaleWrapper.name, mhMouseScaleWrapper)
Vue.component(mhMouseMoveingWrapper.name, mhMouseMoveingWrapper)
Vue.component(mhSelfUpDownWrapper.name, mhSelfUpDownWrapper)