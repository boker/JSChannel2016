"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var speaker_service_1 = require('./speaker.service');
var SpeakerListComponent = (function () {
    function SpeakerListComponent(speakerService) {
        this.speakerService = speakerService;
        this.speakers = [];
    }
    SpeakerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speakerService.getSpeakers()
            .then(function (speakers) { return _this.speakers = speakers; });
    };
    SpeakerListComponent.prototype.showSpeakerDetail = function (speaker) {
        console.log(speaker);
        //router.navigate
    };
    SpeakerListComponent = __decorate([
        core_1.Component({
            selector: 'speakers',
            moduleId: module.id,
            templateUrl: 'speakerlist.component.html',
            providers: [speaker_service_1.SpeakerService]
        }), 
        __metadata('design:paramtypes', [speaker_service_1.SpeakerService])
    ], SpeakerListComponent);
    return SpeakerListComponent;
}());
exports.SpeakerListComponent = SpeakerListComponent;
//# sourceMappingURL=speakerlist.component.js.map