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
var router_1 = require('@angular/router');
var speaker_service_1 = require('./speaker.service');
var SpeakerComponent = (function () {
    function SpeakerComponent(route, speakerService) {
        this.route = route;
        this.speakerService = speakerService;
        this.speaker = { id: 0, name: 'tmp' };
        this.saveSpeaker = new core_1.EventEmitter();
    }
    SpeakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.speakerService.getSpeaker(id)
                .then(function (speaker) {
                _this.speaker = speaker;
                console.log(speaker);
            });
        });
    };
    SpeakerComponent.prototype.save = function (speaker) {
        this.saveSpeaker.emit(this.speaker);
    };
    SpeakerComponent.prototype.goBack = function () {
        window.history.back();
    };
    SpeakerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SpeakerComponent.prototype, "saveSpeaker", void 0);
    SpeakerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'speaker',
            templateUrl: 'speaker.component.html',
            providers: [speaker_service_1.SpeakerService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, speaker_service_1.SpeakerService])
    ], SpeakerComponent);
    return SpeakerComponent;
}());
exports.SpeakerComponent = SpeakerComponent;
//# sourceMappingURL=speaker.component.js.map