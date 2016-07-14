"use strict";
var participantlist_component_1 = require('./participantlist.component');
var participant_component_1 = require('./participant.component');
exports.participantRoutes = [
    { path: 'participants', component: participantlist_component_1.ParticipantListComponent },
    { path: 'participants/:id', component: participant_component_1.ParticipantComponent }
];
//# sourceMappingURL=participants.routes.js.map