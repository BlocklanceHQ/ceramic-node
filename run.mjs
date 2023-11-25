import { DaemonConfig, CeramicDaemon } from "@ceramicnetwork/cli";

const generateConfig = (adminDid, dbUrl) => {
  return DaemonConfig.fromObject({
    anchor: {},
    "http-api": {
      "cors-allowed-origins": [".*"],
      "admin-dids": [adminDid],
    },
    ipfs: {
      mode: "bundled",
    },
    logger: {
      "log-level": 2,
      "log-to-files": false,
    },
    metrics: {
      "metrics-exporter-enabled": false,
      "metrics-port": 9090,
    },
    network: {
      name: "inmemory",
    },
    node: {},
    "state-store": {
      mode: "fs",
      "local-directory": `${process.cwd()}/.ceramic/.ceramic/statestore/`,
    },
    indexing: {
      db: dbUrl,
      "allow-queries-before-historical-sync": true,
      models: [],
    },
  });
};

const config = generateConfig(process.env.ADMIN_DID, process.env.DB_URL);
CeramicDaemon.create(config);
