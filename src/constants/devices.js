/*
const devices = {
    blinds: { name:"blinds", id: "eu0v2xgprrhhg41g"},
    lamp: { name: "blinds", id: "go46xmbqeomjrsjr" },
    oven: { name: "oven", id: "im77xxyulpegfmv8" },
    ac: { name: "ac", id: "li6cbv5sdlatti0j" },
    door: { name: "door", id: "lsf78ly0eqrjbz91" },
    alarm: { name: "alarm", id: "mxztsyjzsrq7iaqc" },
    timer: { name: "timer", id: "ofglvd9gqX8yfl3l" },
    refrigerator: { name: "refrigerator", id: "rnizejqr2di0okho"}
};
*/

const DEVICES = [
    {name:"blinds", id: "eu0v2xgprrhhg41g"},
    {name: "lamp", id: "go46xmbqeomjrsjr" },
    { name: "oven", id: "im77xxyulpegfmv8" },
    { name: "ac", id: "li6cbv5sdlatti0j" },
    { name: "door", id: "lsf78ly0eqrjbz91" },
    { name: "alarm", id: "mxztsyjzsrq7iaqc" },
    { name: "timer", id: "ofglvd9gqX8yfl3l" },
    { name: "refrigerator", id: "rnizejqr2di0okho"}
];

export const DEVICES_ICONS = {
    blinds: "format_align_justify",
    lamp: "highlight",
    oven: "restaurant",
    ac: "ac_unit",
    door: "meeting_room",
    alarm: "lock",
    timer: "access_alarm",
    refrigerator: "kitchen"
}

export default DEVICES;