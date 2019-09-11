import * as devConfigs from "./config.development";

require("dotenv").load();

const Configs = () => {
    switch(process.env.NODE_ENV) {
        case "development":
            return devConfigs;
        default:
            return {}
    }
}

export default Configs();
