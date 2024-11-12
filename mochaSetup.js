import {JSDOM} from "jsdom";

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>',);

global.window = dom.window;
global.document = dom.window.document;
global.Node = dom.window.Node;
global.history = dom.window.history;
global.XMLHttpRequest = dom.window.XMLHttpRequest;
global.MouseEvent = dom.window.MouseEvent;
