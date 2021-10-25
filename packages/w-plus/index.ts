import { WIcon } from "@w-plus/components";
import type { App } from "vue";

const components = [WIcon];

const install = (app: App) => {
  components.forEach((component) => app.use(component));
};

// app.use(WPlus)
export default {
    install
}

// import { WIcon } from 'w-plus
export * from '@w-plus/components'
export * from 'element-plus'