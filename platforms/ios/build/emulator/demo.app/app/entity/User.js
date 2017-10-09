"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User = (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBK0Q7QUFHL0Q7SUFBQTtJQWNBLENBQUM7SUFYRztRQURDLGdDQUFzQixFQUFFOztvQ0FDZDtJQUdYO1FBREMsZ0JBQU0sRUFBRTs7MkNBQ1M7SUFHbEI7UUFEQyxnQkFBTSxFQUFFOzswQ0FDUTtJQUdqQjtRQURDLGdCQUFNLEVBQUU7O3FDQUNHO0lBWkgsSUFBSTtRQURoQixnQkFBTSxFQUFFO09BQ0ksSUFBSSxDQWNoQjtJQUFELFdBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW59IGZyb20gXCJ0eXBlb3JtXCI7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICAgIGlkOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uKClcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBhZ2U6IG51bWJlcjtcblxufVxuIl19