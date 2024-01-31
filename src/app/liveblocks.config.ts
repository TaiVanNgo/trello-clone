import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  authEndpoint: "/api/auth",
 throttle: 100,
});

type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
};

type Storage = {
};

export const {
  RoomProvider,
  useMyPresence,
  useStorage,
  /* ...all the other hooks you’re using... */
} = createRoomContext<
  Presence,
  Storage
  /* UserMeta, RoomEvent, ThreadMetadata */
>(client);