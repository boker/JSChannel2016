"use strict";
var speakerlist_component_1 = require('./speakerlist.component');
var speaker_component_1 = require('./speaker.component');
exports.speakerRoutes = [
    { path: 'speakers', component: speakerlist_component_1.SpeakerListComponent },
    { path: 'speakers/:id', component: speaker_component_1.SpeakerComponent }
];
//# sourceMappingURL=speakers.routes.js.map