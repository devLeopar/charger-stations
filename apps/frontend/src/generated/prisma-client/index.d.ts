
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Simulation
 * 
 */
export type Simulation = $Result.DefaultSelection<Prisma.$SimulationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Simulations
 * const simulations = await prisma.simulation.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Simulations
   * const simulations = await prisma.simulation.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.simulation`: Exposes CRUD operations for the **Simulation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Simulations
    * const simulations = await prisma.simulation.findMany()
    * ```
    */
  get simulation(): Prisma.SimulationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Simulation: 'Simulation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "simulation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Simulation: {
        payload: Prisma.$SimulationPayload<ExtArgs>
        fields: Prisma.SimulationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimulationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimulationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          findFirst: {
            args: Prisma.SimulationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimulationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          findMany: {
            args: Prisma.SimulationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          create: {
            args: Prisma.SimulationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          createMany: {
            args: Prisma.SimulationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SimulationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          delete: {
            args: Prisma.SimulationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          update: {
            args: Prisma.SimulationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          deleteMany: {
            args: Prisma.SimulationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimulationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SimulationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          upsert: {
            args: Prisma.SimulationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          aggregate: {
            args: Prisma.SimulationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimulation>
          }
          groupBy: {
            args: Prisma.SimulationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimulationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimulationCountArgs<ExtArgs>
            result: $Utils.Optional<SimulationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    simulation?: SimulationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Simulation
   */

  export type AggregateSimulation = {
    _count: SimulationCountAggregateOutputType | null
    _avg: SimulationAvgAggregateOutputType | null
    _sum: SimulationSumAggregateOutputType | null
    _min: SimulationMinAggregateOutputType | null
    _max: SimulationMaxAggregateOutputType | null
  }

  export type SimulationAvgAggregateOutputType = {
    numChargers: number | null
    powerKW: number | null
    arrivalMultiplier: number | null
    evConsumption: number | null
    durationDays: number | null
    rngSeed: number | null
    totalEnergyConsumedKWh: number | null
    actualMaxPowerDemandKW: number | null
    theoreticalMaxPowerKW: number | null
    concurrencyFactor: number | null
  }

  export type SimulationSumAggregateOutputType = {
    numChargers: number | null
    powerKW: number | null
    arrivalMultiplier: number | null
    evConsumption: number | null
    durationDays: number | null
    rngSeed: number | null
    totalEnergyConsumedKWh: number | null
    actualMaxPowerDemandKW: number | null
    theoreticalMaxPowerKW: number | null
    concurrencyFactor: number | null
  }

  export type SimulationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    numChargers: number | null
    powerKW: number | null
    arrivalMultiplier: number | null
    evConsumption: number | null
    durationDays: number | null
    rngSeed: number | null
    totalEnergyConsumedKWh: number | null
    actualMaxPowerDemandKW: number | null
    theoreticalMaxPowerKW: number | null
    concurrencyFactor: number | null
  }

  export type SimulationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    numChargers: number | null
    powerKW: number | null
    arrivalMultiplier: number | null
    evConsumption: number | null
    durationDays: number | null
    rngSeed: number | null
    totalEnergyConsumedKWh: number | null
    actualMaxPowerDemandKW: number | null
    theoreticalMaxPowerKW: number | null
    concurrencyFactor: number | null
  }

  export type SimulationCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    numChargers: number
    powerKW: number
    arrivalMultiplier: number
    evConsumption: number
    durationDays: number
    rngSeed: number
    totalEnergyConsumedKWh: number
    actualMaxPowerDemandKW: number
    theoreticalMaxPowerKW: number
    concurrencyFactor: number
    _all: number
  }


  export type SimulationAvgAggregateInputType = {
    numChargers?: true
    powerKW?: true
    arrivalMultiplier?: true
    evConsumption?: true
    durationDays?: true
    rngSeed?: true
    totalEnergyConsumedKWh?: true
    actualMaxPowerDemandKW?: true
    theoreticalMaxPowerKW?: true
    concurrencyFactor?: true
  }

  export type SimulationSumAggregateInputType = {
    numChargers?: true
    powerKW?: true
    arrivalMultiplier?: true
    evConsumption?: true
    durationDays?: true
    rngSeed?: true
    totalEnergyConsumedKWh?: true
    actualMaxPowerDemandKW?: true
    theoreticalMaxPowerKW?: true
    concurrencyFactor?: true
  }

  export type SimulationMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    numChargers?: true
    powerKW?: true
    arrivalMultiplier?: true
    evConsumption?: true
    durationDays?: true
    rngSeed?: true
    totalEnergyConsumedKWh?: true
    actualMaxPowerDemandKW?: true
    theoreticalMaxPowerKW?: true
    concurrencyFactor?: true
  }

  export type SimulationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    numChargers?: true
    powerKW?: true
    arrivalMultiplier?: true
    evConsumption?: true
    durationDays?: true
    rngSeed?: true
    totalEnergyConsumedKWh?: true
    actualMaxPowerDemandKW?: true
    theoreticalMaxPowerKW?: true
    concurrencyFactor?: true
  }

  export type SimulationCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    numChargers?: true
    powerKW?: true
    arrivalMultiplier?: true
    evConsumption?: true
    durationDays?: true
    rngSeed?: true
    totalEnergyConsumedKWh?: true
    actualMaxPowerDemandKW?: true
    theoreticalMaxPowerKW?: true
    concurrencyFactor?: true
    _all?: true
  }

  export type SimulationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simulation to aggregate.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Simulations
    **/
    _count?: true | SimulationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimulationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimulationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimulationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimulationMaxAggregateInputType
  }

  export type GetSimulationAggregateType<T extends SimulationAggregateArgs> = {
        [P in keyof T & keyof AggregateSimulation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimulation[P]>
      : GetScalarType<T[P], AggregateSimulation[P]>
  }




  export type SimulationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulationWhereInput
    orderBy?: SimulationOrderByWithAggregationInput | SimulationOrderByWithAggregationInput[]
    by: SimulationScalarFieldEnum[] | SimulationScalarFieldEnum
    having?: SimulationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimulationCountAggregateInputType | true
    _avg?: SimulationAvgAggregateInputType
    _sum?: SimulationSumAggregateInputType
    _min?: SimulationMinAggregateInputType
    _max?: SimulationMaxAggregateInputType
  }

  export type SimulationGroupByOutputType = {
    id: string
    createdAt: Date
    name: string | null
    numChargers: number
    powerKW: number
    arrivalMultiplier: number
    evConsumption: number
    durationDays: number
    rngSeed: number | null
    totalEnergyConsumedKWh: number
    actualMaxPowerDemandKW: number
    theoreticalMaxPowerKW: number
    concurrencyFactor: number
    _count: SimulationCountAggregateOutputType | null
    _avg: SimulationAvgAggregateOutputType | null
    _sum: SimulationSumAggregateOutputType | null
    _min: SimulationMinAggregateOutputType | null
    _max: SimulationMaxAggregateOutputType | null
  }

  type GetSimulationGroupByPayload<T extends SimulationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimulationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimulationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimulationGroupByOutputType[P]>
            : GetScalarType<T[P], SimulationGroupByOutputType[P]>
        }
      >
    >


  export type SimulationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    numChargers?: boolean
    powerKW?: boolean
    arrivalMultiplier?: boolean
    evConsumption?: boolean
    durationDays?: boolean
    rngSeed?: boolean
    totalEnergyConsumedKWh?: boolean
    actualMaxPowerDemandKW?: boolean
    theoreticalMaxPowerKW?: boolean
    concurrencyFactor?: boolean
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    numChargers?: boolean
    powerKW?: boolean
    arrivalMultiplier?: boolean
    evConsumption?: boolean
    durationDays?: boolean
    rngSeed?: boolean
    totalEnergyConsumedKWh?: boolean
    actualMaxPowerDemandKW?: boolean
    theoreticalMaxPowerKW?: boolean
    concurrencyFactor?: boolean
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    numChargers?: boolean
    powerKW?: boolean
    arrivalMultiplier?: boolean
    evConsumption?: boolean
    durationDays?: boolean
    rngSeed?: boolean
    totalEnergyConsumedKWh?: boolean
    actualMaxPowerDemandKW?: boolean
    theoreticalMaxPowerKW?: boolean
    concurrencyFactor?: boolean
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    numChargers?: boolean
    powerKW?: boolean
    arrivalMultiplier?: boolean
    evConsumption?: boolean
    durationDays?: boolean
    rngSeed?: boolean
    totalEnergyConsumedKWh?: boolean
    actualMaxPowerDemandKW?: boolean
    theoreticalMaxPowerKW?: boolean
    concurrencyFactor?: boolean
  }

  export type SimulationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "numChargers" | "powerKW" | "arrivalMultiplier" | "evConsumption" | "durationDays" | "rngSeed" | "totalEnergyConsumedKWh" | "actualMaxPowerDemandKW" | "theoreticalMaxPowerKW" | "concurrencyFactor", ExtArgs["result"]["simulation"]>

  export type $SimulationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Simulation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string | null
      numChargers: number
      powerKW: number
      arrivalMultiplier: number
      evConsumption: number
      durationDays: number
      rngSeed: number | null
      totalEnergyConsumedKWh: number
      actualMaxPowerDemandKW: number
      theoreticalMaxPowerKW: number
      concurrencyFactor: number
    }, ExtArgs["result"]["simulation"]>
    composites: {}
  }

  type SimulationGetPayload<S extends boolean | null | undefined | SimulationDefaultArgs> = $Result.GetResult<Prisma.$SimulationPayload, S>

  type SimulationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimulationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimulationCountAggregateInputType | true
    }

  export interface SimulationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Simulation'], meta: { name: 'Simulation' } }
    /**
     * Find zero or one Simulation that matches the filter.
     * @param {SimulationFindUniqueArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimulationFindUniqueArgs>(args: SelectSubset<T, SimulationFindUniqueArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Simulation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimulationFindUniqueOrThrowArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimulationFindUniqueOrThrowArgs>(args: SelectSubset<T, SimulationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindFirstArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimulationFindFirstArgs>(args?: SelectSubset<T, SimulationFindFirstArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindFirstOrThrowArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimulationFindFirstOrThrowArgs>(args?: SelectSubset<T, SimulationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Simulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Simulations
     * const simulations = await prisma.simulation.findMany()
     * 
     * // Get first 10 Simulations
     * const simulations = await prisma.simulation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const simulationWithIdOnly = await prisma.simulation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SimulationFindManyArgs>(args?: SelectSubset<T, SimulationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Simulation.
     * @param {SimulationCreateArgs} args - Arguments to create a Simulation.
     * @example
     * // Create one Simulation
     * const Simulation = await prisma.simulation.create({
     *   data: {
     *     // ... data to create a Simulation
     *   }
     * })
     * 
     */
    create<T extends SimulationCreateArgs>(args: SelectSubset<T, SimulationCreateArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Simulations.
     * @param {SimulationCreateManyArgs} args - Arguments to create many Simulations.
     * @example
     * // Create many Simulations
     * const simulation = await prisma.simulation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimulationCreateManyArgs>(args?: SelectSubset<T, SimulationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Simulations and returns the data saved in the database.
     * @param {SimulationCreateManyAndReturnArgs} args - Arguments to create many Simulations.
     * @example
     * // Create many Simulations
     * const simulation = await prisma.simulation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Simulations and only return the `id`
     * const simulationWithIdOnly = await prisma.simulation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SimulationCreateManyAndReturnArgs>(args?: SelectSubset<T, SimulationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Simulation.
     * @param {SimulationDeleteArgs} args - Arguments to delete one Simulation.
     * @example
     * // Delete one Simulation
     * const Simulation = await prisma.simulation.delete({
     *   where: {
     *     // ... filter to delete one Simulation
     *   }
     * })
     * 
     */
    delete<T extends SimulationDeleteArgs>(args: SelectSubset<T, SimulationDeleteArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Simulation.
     * @param {SimulationUpdateArgs} args - Arguments to update one Simulation.
     * @example
     * // Update one Simulation
     * const simulation = await prisma.simulation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimulationUpdateArgs>(args: SelectSubset<T, SimulationUpdateArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Simulations.
     * @param {SimulationDeleteManyArgs} args - Arguments to filter Simulations to delete.
     * @example
     * // Delete a few Simulations
     * const { count } = await prisma.simulation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimulationDeleteManyArgs>(args?: SelectSubset<T, SimulationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Simulations
     * const simulation = await prisma.simulation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimulationUpdateManyArgs>(args: SelectSubset<T, SimulationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simulations and returns the data updated in the database.
     * @param {SimulationUpdateManyAndReturnArgs} args - Arguments to update many Simulations.
     * @example
     * // Update many Simulations
     * const simulation = await prisma.simulation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Simulations and only return the `id`
     * const simulationWithIdOnly = await prisma.simulation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SimulationUpdateManyAndReturnArgs>(args: SelectSubset<T, SimulationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Simulation.
     * @param {SimulationUpsertArgs} args - Arguments to update or create a Simulation.
     * @example
     * // Update or create a Simulation
     * const simulation = await prisma.simulation.upsert({
     *   create: {
     *     // ... data to create a Simulation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Simulation we want to update
     *   }
     * })
     */
    upsert<T extends SimulationUpsertArgs>(args: SelectSubset<T, SimulationUpsertArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Simulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationCountArgs} args - Arguments to filter Simulations to count.
     * @example
     * // Count the number of Simulations
     * const count = await prisma.simulation.count({
     *   where: {
     *     // ... the filter for the Simulations we want to count
     *   }
     * })
    **/
    count<T extends SimulationCountArgs>(
      args?: Subset<T, SimulationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimulationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Simulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SimulationAggregateArgs>(args: Subset<T, SimulationAggregateArgs>): Prisma.PrismaPromise<GetSimulationAggregateType<T>>

    /**
     * Group by Simulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SimulationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimulationGroupByArgs['orderBy'] }
        : { orderBy?: SimulationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SimulationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimulationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Simulation model
   */
  readonly fields: SimulationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Simulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimulationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Simulation model
   */
  interface SimulationFieldRefs {
    readonly id: FieldRef<"Simulation", 'String'>
    readonly createdAt: FieldRef<"Simulation", 'DateTime'>
    readonly name: FieldRef<"Simulation", 'String'>
    readonly numChargers: FieldRef<"Simulation", 'Int'>
    readonly powerKW: FieldRef<"Simulation", 'Float'>
    readonly arrivalMultiplier: FieldRef<"Simulation", 'Float'>
    readonly evConsumption: FieldRef<"Simulation", 'Float'>
    readonly durationDays: FieldRef<"Simulation", 'Int'>
    readonly rngSeed: FieldRef<"Simulation", 'Int'>
    readonly totalEnergyConsumedKWh: FieldRef<"Simulation", 'Float'>
    readonly actualMaxPowerDemandKW: FieldRef<"Simulation", 'Float'>
    readonly theoreticalMaxPowerKW: FieldRef<"Simulation", 'Float'>
    readonly concurrencyFactor: FieldRef<"Simulation", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Simulation findUnique
   */
  export type SimulationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation findUniqueOrThrow
   */
  export type SimulationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation findFirst
   */
  export type SimulationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation findFirstOrThrow
   */
  export type SimulationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation findMany
   */
  export type SimulationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Filter, which Simulations to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation create
   */
  export type SimulationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The data needed to create a Simulation.
     */
    data: XOR<SimulationCreateInput, SimulationUncheckedCreateInput>
  }

  /**
   * Simulation createMany
   */
  export type SimulationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Simulations.
     */
    data: SimulationCreateManyInput | SimulationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Simulation createManyAndReturn
   */
  export type SimulationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The data used to create many Simulations.
     */
    data: SimulationCreateManyInput | SimulationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Simulation update
   */
  export type SimulationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The data needed to update a Simulation.
     */
    data: XOR<SimulationUpdateInput, SimulationUncheckedUpdateInput>
    /**
     * Choose, which Simulation to update.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation updateMany
   */
  export type SimulationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Simulations.
     */
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyInput>
    /**
     * Filter which Simulations to update
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to update.
     */
    limit?: number
  }

  /**
   * Simulation updateManyAndReturn
   */
  export type SimulationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The data used to update Simulations.
     */
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyInput>
    /**
     * Filter which Simulations to update
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to update.
     */
    limit?: number
  }

  /**
   * Simulation upsert
   */
  export type SimulationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The filter to search for the Simulation to update in case it exists.
     */
    where: SimulationWhereUniqueInput
    /**
     * In case the Simulation found by the `where` argument doesn't exist, create a new Simulation with this data.
     */
    create: XOR<SimulationCreateInput, SimulationUncheckedCreateInput>
    /**
     * In case the Simulation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimulationUpdateInput, SimulationUncheckedUpdateInput>
  }

  /**
   * Simulation delete
   */
  export type SimulationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Filter which Simulation to delete.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation deleteMany
   */
  export type SimulationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simulations to delete
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to delete.
     */
    limit?: number
  }

  /**
   * Simulation without action
   */
  export type SimulationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SimulationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    numChargers: 'numChargers',
    powerKW: 'powerKW',
    arrivalMultiplier: 'arrivalMultiplier',
    evConsumption: 'evConsumption',
    durationDays: 'durationDays',
    rngSeed: 'rngSeed',
    totalEnergyConsumedKWh: 'totalEnergyConsumedKWh',
    actualMaxPowerDemandKW: 'actualMaxPowerDemandKW',
    theoreticalMaxPowerKW: 'theoreticalMaxPowerKW',
    concurrencyFactor: 'concurrencyFactor'
  };

  export type SimulationScalarFieldEnum = (typeof SimulationScalarFieldEnum)[keyof typeof SimulationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SimulationWhereInput = {
    AND?: SimulationWhereInput | SimulationWhereInput[]
    OR?: SimulationWhereInput[]
    NOT?: SimulationWhereInput | SimulationWhereInput[]
    id?: StringFilter<"Simulation"> | string
    createdAt?: DateTimeFilter<"Simulation"> | Date | string
    name?: StringNullableFilter<"Simulation"> | string | null
    numChargers?: IntFilter<"Simulation"> | number
    powerKW?: FloatFilter<"Simulation"> | number
    arrivalMultiplier?: FloatFilter<"Simulation"> | number
    evConsumption?: FloatFilter<"Simulation"> | number
    durationDays?: IntFilter<"Simulation"> | number
    rngSeed?: IntNullableFilter<"Simulation"> | number | null
    totalEnergyConsumedKWh?: FloatFilter<"Simulation"> | number
    actualMaxPowerDemandKW?: FloatFilter<"Simulation"> | number
    theoreticalMaxPowerKW?: FloatFilter<"Simulation"> | number
    concurrencyFactor?: FloatFilter<"Simulation"> | number
  }

  export type SimulationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrderInput | SortOrder
    numChargers?: SortOrder
    powerKW?: SortOrder
    arrivalMultiplier?: SortOrder
    evConsumption?: SortOrder
    durationDays?: SortOrder
    rngSeed?: SortOrderInput | SortOrder
    totalEnergyConsumedKWh?: SortOrder
    actualMaxPowerDemandKW?: SortOrder
    theoreticalMaxPowerKW?: SortOrder
    concurrencyFactor?: SortOrder
  }

  export type SimulationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SimulationWhereInput | SimulationWhereInput[]
    OR?: SimulationWhereInput[]
    NOT?: SimulationWhereInput | SimulationWhereInput[]
    createdAt?: DateTimeFilter<"Simulation"> | Date | string
    name?: StringNullableFilter<"Simulation"> | string | null
    numChargers?: IntFilter<"Simulation"> | number
    powerKW?: FloatFilter<"Simulation"> | number
    arrivalMultiplier?: FloatFilter<"Simulation"> | number
    evConsumption?: FloatFilter<"Simulation"> | number
    durationDays?: IntFilter<"Simulation"> | number
    rngSeed?: IntNullableFilter<"Simulation"> | number | null
    totalEnergyConsumedKWh?: FloatFilter<"Simulation"> | number
    actualMaxPowerDemandKW?: FloatFilter<"Simulation"> | number
    theoreticalMaxPowerKW?: FloatFilter<"Simulation"> | number
    concurrencyFactor?: FloatFilter<"Simulation"> | number
  }, "id">

  export type SimulationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrderInput | SortOrder
    numChargers?: SortOrder
    powerKW?: SortOrder
    arrivalMultiplier?: SortOrder
    evConsumption?: SortOrder
    durationDays?: SortOrder
    rngSeed?: SortOrderInput | SortOrder
    totalEnergyConsumedKWh?: SortOrder
    actualMaxPowerDemandKW?: SortOrder
    theoreticalMaxPowerKW?: SortOrder
    concurrencyFactor?: SortOrder
    _count?: SimulationCountOrderByAggregateInput
    _avg?: SimulationAvgOrderByAggregateInput
    _max?: SimulationMaxOrderByAggregateInput
    _min?: SimulationMinOrderByAggregateInput
    _sum?: SimulationSumOrderByAggregateInput
  }

  export type SimulationScalarWhereWithAggregatesInput = {
    AND?: SimulationScalarWhereWithAggregatesInput | SimulationScalarWhereWithAggregatesInput[]
    OR?: SimulationScalarWhereWithAggregatesInput[]
    NOT?: SimulationScalarWhereWithAggregatesInput | SimulationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Simulation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Simulation"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Simulation"> | string | null
    numChargers?: IntWithAggregatesFilter<"Simulation"> | number
    powerKW?: FloatWithAggregatesFilter<"Simulation"> | number
    arrivalMultiplier?: FloatWithAggregatesFilter<"Simulation"> | number
    evConsumption?: FloatWithAggregatesFilter<"Simulation"> | number
    durationDays?: IntWithAggregatesFilter<"Simulation"> | number
    rngSeed?: IntNullableWithAggregatesFilter<"Simulation"> | number | null
    totalEnergyConsumedKWh?: FloatWithAggregatesFilter<"Simulation"> | number
    actualMaxPowerDemandKW?: FloatWithAggregatesFilter<"Simulation"> | number
    theoreticalMaxPowerKW?: FloatWithAggregatesFilter<"Simulation"> | number
    concurrencyFactor?: FloatWithAggregatesFilter<"Simulation"> | number
  }

  export type SimulationCreateInput = {
    id?: string
    createdAt?: Date | string
    name?: string | null
    numChargers: number
    powerKW: number
    arrivalMultiplier?: number
    evConsumption?: number
    durationDays?: number
    rngSeed?: number | null
    totalEnergyConsumedKWh: number
    actualMaxPowerDemandKW: number
    theoreticalMaxPowerKW: number
    concurrencyFactor: number
  }

  export type SimulationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name?: string | null
    numChargers: number
    powerKW: number
    arrivalMultiplier?: number
    evConsumption?: number
    durationDays?: number
    rngSeed?: number | null
    totalEnergyConsumedKWh: number
    actualMaxPowerDemandKW: number
    theoreticalMaxPowerKW: number
    concurrencyFactor: number
  }

  export type SimulationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    numChargers?: IntFieldUpdateOperationsInput | number
    powerKW?: FloatFieldUpdateOperationsInput | number
    arrivalMultiplier?: FloatFieldUpdateOperationsInput | number
    evConsumption?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumedKWh?: FloatFieldUpdateOperationsInput | number
    actualMaxPowerDemandKW?: FloatFieldUpdateOperationsInput | number
    theoreticalMaxPowerKW?: FloatFieldUpdateOperationsInput | number
    concurrencyFactor?: FloatFieldUpdateOperationsInput | number
  }

  export type SimulationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    numChargers?: IntFieldUpdateOperationsInput | number
    powerKW?: FloatFieldUpdateOperationsInput | number
    arrivalMultiplier?: FloatFieldUpdateOperationsInput | number
    evConsumption?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumedKWh?: FloatFieldUpdateOperationsInput | number
    actualMaxPowerDemandKW?: FloatFieldUpdateOperationsInput | number
    theoreticalMaxPowerKW?: FloatFieldUpdateOperationsInput | number
    concurrencyFactor?: FloatFieldUpdateOperationsInput | number
  }

  export type SimulationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name?: string | null
    numChargers: number
    powerKW: number
    arrivalMultiplier?: number
    evConsumption?: number
    durationDays?: number
    rngSeed?: number | null
    totalEnergyConsumedKWh: number
    actualMaxPowerDemandKW: number
    theoreticalMaxPowerKW: number
    concurrencyFactor: number
  }

  export type SimulationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    numChargers?: IntFieldUpdateOperationsInput | number
    powerKW?: FloatFieldUpdateOperationsInput | number
    arrivalMultiplier?: FloatFieldUpdateOperationsInput | number
    evConsumption?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumedKWh?: FloatFieldUpdateOperationsInput | number
    actualMaxPowerDemandKW?: FloatFieldUpdateOperationsInput | number
    theoreticalMaxPowerKW?: FloatFieldUpdateOperationsInput | number
    concurrencyFactor?: FloatFieldUpdateOperationsInput | number
  }

  export type SimulationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    numChargers?: IntFieldUpdateOperationsInput | number
    powerKW?: FloatFieldUpdateOperationsInput | number
    arrivalMultiplier?: FloatFieldUpdateOperationsInput | number
    evConsumption?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    totalEnergyConsumedKWh?: FloatFieldUpdateOperationsInput | number
    actualMaxPowerDemandKW?: FloatFieldUpdateOperationsInput | number
    theoreticalMaxPowerKW?: FloatFieldUpdateOperationsInput | number
    concurrencyFactor?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SimulationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    numChargers?: SortOrder
    powerKW?: SortOrder
    arrivalMultiplier?: SortOrder
    evConsumption?: SortOrder
    durationDays?: SortOrder
    rngSeed?: SortOrder
    totalEnergyConsumedKWh?: SortOrder
    actualMaxPowerDemandKW?: SortOrder
    theoreticalMaxPowerKW?: SortOrder
    concurrencyFactor?: SortOrder
  }

  export type SimulationAvgOrderByAggregateInput = {
    numChargers?: SortOrder
    powerKW?: SortOrder
    arrivalMultiplier?: SortOrder
    evConsumption?: SortOrder
    durationDays?: SortOrder
    rngSeed?: SortOrder
    totalEnergyConsumedKWh?: SortOrder
    actualMaxPowerDemandKW?: SortOrder
    theoreticalMaxPowerKW?: SortOrder
    concurrencyFactor?: SortOrder
  }

  export type SimulationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    numChargers?: SortOrder
    powerKW?: SortOrder
    arrivalMultiplier?: SortOrder
    evConsumption?: SortOrder
    durationDays?: SortOrder
    rngSeed?: SortOrder
    totalEnergyConsumedKWh?: SortOrder
    actualMaxPowerDemandKW?: SortOrder
    theoreticalMaxPowerKW?: SortOrder
    concurrencyFactor?: SortOrder
  }

  export type SimulationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    numChargers?: SortOrder
    powerKW?: SortOrder
    arrivalMultiplier?: SortOrder
    evConsumption?: SortOrder
    durationDays?: SortOrder
    rngSeed?: SortOrder
    totalEnergyConsumedKWh?: SortOrder
    actualMaxPowerDemandKW?: SortOrder
    theoreticalMaxPowerKW?: SortOrder
    concurrencyFactor?: SortOrder
  }

  export type SimulationSumOrderByAggregateInput = {
    numChargers?: SortOrder
    powerKW?: SortOrder
    arrivalMultiplier?: SortOrder
    evConsumption?: SortOrder
    durationDays?: SortOrder
    rngSeed?: SortOrder
    totalEnergyConsumedKWh?: SortOrder
    actualMaxPowerDemandKW?: SortOrder
    theoreticalMaxPowerKW?: SortOrder
    concurrencyFactor?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}