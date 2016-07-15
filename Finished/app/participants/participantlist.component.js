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
var participant_service_1 = require('./participant.service');
var participant_component_1 = require('./participant.component');
var ParticipantListComponent = (function () {
    function ParticipantListComponent(participantService) {
        this.participantService = participantService;
    }
    ParticipantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participantService.getParticipants()
            .then(function (participants) { return _this.participants = participants; });
    };
    ParticipantListComponent.prototype.selectParticipant = function (participant) {
        this.selectedParticipant = participant;
    };
    ParticipantListComponent.prototype.SaveParticipant = function (participant) {
        console.log('the participant to save is - ' + participant.name);
    };
    ParticipantListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'participants',
            templateUrl: 'participantlist.component.html',
            providers: [participant_service_1.ParticipantService],
            directives: [participant_component_1.ParticipantComponent]
        }), 
        __metadata('design:paramtypes', [participant_service_1.ParticipantService])
    ], ParticipantListComponent);
    return ParticipantListComponent;
}());
exports.ParticipantListComponent = ParticipantListComponent;
//# sourceMappingURL=participantlist.component.js.map