"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
console.log("Conencting to the database...");
typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    var user, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Inserting a new user into the database...");
                user = new User_1.User();
                user.firstName = "Timber";
                user.lastName = "Saw";
                user.age = 25;
                return [4 /*yield*/, connection.manager.save(user)];
            case 1:
                _a.sent();
                console.log("Saved a new user with id: " + user.id);
                console.log("Loading users from the database...");
                return [4 /*yield*/, connection.manager.find(User_1.User)];
            case 2:
                users = _a.sent();
                console.log("Loaded users: ", users);
                console.log("Here you can setup and run express/koa/any other framework.");
                return [2 /*return*/];
        }
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlCQWdDQTs7QUFqQ0EsMEdBQTBHO0FBQzFHLDBEQUE0RTtBQUU1RSwyQ0FBeUM7QUFHekMsNEJBQTBCO0FBQzFCLG1DQUF5QztBQUN6QyxzQ0FBbUM7QUFFbkMseUpBQXlKO0FBQ3pKLDhIQUE4SDtBQUM5SCxnSkFBZ0o7QUFDaEosbUZBQW1GO0FBQ25GLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQztBQUV6RCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDN0MsMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBTSxVQUFVOzs7OztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDZCxxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQW5DLFNBQW1DLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVwRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7Z0JBQ3BDLHFCQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQUksQ0FBQyxFQUFBOztnQkFBM0MsS0FBSyxHQUFHLFNBQW1DO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7Ozs7S0FFOUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cblxuaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHtjcmVhdGVDb25uZWN0aW9ufSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi9lbnRpdHkvVXNlclwiO1xuXG4vLyBBIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLCBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLiBcbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuIFxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLCBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYywgXG4vLyB0aGF0IHNldHMgdXAgYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gYW5kIGNhbiBib290c3RyYXAgdGhlIEFuZ3VsYXIgZnJhbWV3b3JrLlxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cbmNvbnNvbGUubG9nKFwiQ29uZW5jdGluZyB0byB0aGUgZGF0YWJhc2UuLi5cIik7XG5jcmVhdGVDb25uZWN0aW9uKCkudGhlbihhc3luYyBjb25uZWN0aW9uID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkluc2VydGluZyBhIG5ldyB1c2VyIGludG8gdGhlIGRhdGFiYXNlLi4uXCIpO1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXIuZmlyc3ROYW1lID0gXCJUaW1iZXJcIjtcbiAgICB1c2VyLmxhc3ROYW1lID0gXCJTYXdcIjtcbiAgICB1c2VyLmFnZSA9IDI1O1xuICAgIGF3YWl0IGNvbm5lY3Rpb24ubWFuYWdlci5zYXZlKHVzZXIpO1xuICAgIGNvbnNvbGUubG9nKFwiU2F2ZWQgYSBuZXcgdXNlciB3aXRoIGlkOiBcIiArIHVzZXIuaWQpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyB1c2VycyBmcm9tIHRoZSBkYXRhYmFzZS4uLlwiKTtcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IGNvbm5lY3Rpb24ubWFuYWdlci5maW5kKFVzZXIpO1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIHVzZXJzOiBcIiwgdXNlcnMpO1xuICAgICAgICBcbiAgICBjb25zb2xlLmxvZyhcIkhlcmUgeW91IGNhbiBzZXR1cCBhbmQgcnVuIGV4cHJlc3Mva29hL2FueSBvdGhlciBmcmFtZXdvcmsuXCIpO1xuICAgIFxufSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiJdfQ==