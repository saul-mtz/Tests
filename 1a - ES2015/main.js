import makeRequest from "./promise-ajax.js";
import TabStrip from "./tabstrip.js";

"use strict";

makeRequest("GET", "./data.json").then(data => new TabStrip("tabStrip", data));

