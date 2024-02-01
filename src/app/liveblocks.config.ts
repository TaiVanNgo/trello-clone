import { LiveList, LiveObject, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
 throttle: 100,
});

type Presence = {
};

type Column = {
  name: string;
  id: string;
  index: number;
};

type Storage = {
  columns: LiveList<LiveObject<Column>>;
};

export const {
  RoomProvider,
  useMyPresence,
  useStorage,
  useMutation,
  /* ...all the other hooks you’re using... */
} = createRoomContext<
  Presence,
  Storage
  /* UserMeta, RoomEvent, ThreadMetadata */
>(client);