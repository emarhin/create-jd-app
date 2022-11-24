import { IInstaller } from "~types";

const config: IInstaller = (ctx) => ({
  name: "tRPC",
  files: [
    {
      path: `${ctx.templateDir}/trpc/server`,
      to: `${ctx.userDir}/src/server/trpc`,
      sep: true,
    },
    {
      path: `${__dirname}/files/utils.txt`,
      to: `${ctx.userDir}/src/utils/trpc.ts`,
    },
    {
      path: `${__dirname}/files/entryClient.txt`,
      to: `${ctx.userDir}/src/entry-client.tsx`,
    },
    {
      path: `${ctx.templateDir}/trpc/api`,
      to: `${ctx.userDir}/src/routes/api`,
    },
    {
      path: `${__dirname}/utils/getTrpcUtils`,
      to: `${ctx.userDir}/src/server/trpc/utils.ts`,
      type: "exec",
    },
    {
      path: `${__dirname}/utils/getTrpcContext`,
      to: `${ctx.userDir}/src/server/trpc/context.ts`,
      type: "exec",
    },
    {
      path: `${__dirname}/utils/getMainRouter`,
      to: `${ctx.userDir}/src/server/trpc/router/example.ts`,
      type: "exec",
    },
  ],
  pkgs: {
    "@trpc/client": {
      customVersion: "latest",
    },
    "@trpc/server": {
      customVersion: "latest",
    },
    "solid-trpc": { customVersion: "next" },
    "solid-start-trpc": {},
    "@tanstack/solid-query": {},
  },
});

export default config;
