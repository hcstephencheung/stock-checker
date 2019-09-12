import * as devConfigs from "./config.development";
import * as prodConfigs from "./config.production";

require("dotenv").load();

const Configs = () => {
    switch(process.env.NODE_ENV) {
        case "development":
            return devConfigs;
        case "production":
            return prodConfigs;
        default:
            return {}
    }
}

export default Configs();
