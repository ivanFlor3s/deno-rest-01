const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.0
 * Query Engine version: 39190b250ebc338586e25e6da45e5e783bc8a635
 */
Prisma.prismaVersion = {
  client: "4.7.0",
  engine: "39190b250ebc338586e25e6da45e5e783bc8a635"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  googleAcount: 'googleAcount',
  email: 'email',
  name: 'name',
  lastname: 'lastname',
  imageUrl: 'imageUrl',
  hash: 'hash'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\workspace\\deno-rest-01\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..\\..\\prisma",
  "clientVersion": "4.7.0",
  "engineVersion": "39190b250ebc338586e25e6da45e5e783bc8a635",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICBEYXRlVGltZSBAdXBkYXRlZEF0CiAgZ29vZ2xlQWNvdW50IEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQogIGVtYWlsICAgICAgICBTdHJpbmcgICBAdW5pcXVlCiAgbmFtZSAgICAgICAgIFN0cmluZz8KICBsYXN0bmFtZSAgICAgU3RyaW5nPwogIGltYWdlVXJsICAgICBTdHJpbmcgICBAZGVmYXVsdCgiIikKICBoYXNoICAgICAgICAgU3RyaW5nCn0K'
config.inlineSchemaHash = 'b36e0ed6cd69be07e5de3130fee183ee1643a5ff057cb896746013440787371e'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

