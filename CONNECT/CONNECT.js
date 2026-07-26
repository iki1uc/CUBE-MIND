export const CONNECT = {
  lan: true,
  wlan: true,
  gate: "WLAN-GATE",
  wloch: "WLOCH-ROUTE",
  allxall: "ALLXALL-CONNECT",

  link(room, pipe) {
    return {
      room,
      pipe,
      via: "LAN/WLAN",
      route: this.wloch,
      mode: this.allxall
    };
  }
};

