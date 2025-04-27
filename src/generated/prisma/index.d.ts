
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model MathQuestion
 * 
 */
export type MathQuestion = $Result.DefaultSelection<Prisma.$MathQuestionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  DRAW: 'DRAW',
  PLAYER1_WON: 'PLAYER1_WON',
  PLAYER2_WON: 'PLAYER2_WON'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const MathQuestionType: {
  ARITHMETIC: 'ARITHMETIC'
};

export type MathQuestionType = (typeof MathQuestionType)[keyof typeof MathQuestionType]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type MathQuestionType = $Enums.MathQuestionType

export const MathQuestionType: typeof $Enums.MathQuestionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mathQuestion`: Exposes CRUD operations for the **MathQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MathQuestions
    * const mathQuestions = await prisma.mathQuestion.findMany()
    * ```
    */
  get mathQuestion(): Prisma.MathQuestionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Game: 'Game',
    MathQuestion: 'MathQuestion'
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
      modelProps: "user" | "game" | "mathQuestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      MathQuestion: {
        payload: Prisma.$MathQuestionPayload<ExtArgs>
        fields: Prisma.MathQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MathQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MathQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>
          }
          findFirst: {
            args: Prisma.MathQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MathQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>
          }
          findMany: {
            args: Prisma.MathQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>[]
          }
          create: {
            args: Prisma.MathQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>
          }
          createMany: {
            args: Prisma.MathQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MathQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>[]
          }
          delete: {
            args: Prisma.MathQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>
          }
          update: {
            args: Prisma.MathQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>
          }
          deleteMany: {
            args: Prisma.MathQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MathQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MathQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>[]
          }
          upsert: {
            args: Prisma.MathQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MathQuestionPayload>
          }
          aggregate: {
            args: Prisma.MathQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMathQuestion>
          }
          groupBy: {
            args: Prisma.MathQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MathQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MathQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<MathQuestionCountAggregateOutputType> | number
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
    user?: UserOmit
    game?: GameOmit
    mathQuestion?: MathQuestionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gamesWon: number
    gamesAsPlayer1: number
    gamesAsPlayer2: number
    questions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesWon?: boolean | UserCountOutputTypeCountGamesWonArgs
    gamesAsPlayer1?: boolean | UserCountOutputTypeCountGamesAsPlayer1Args
    gamesAsPlayer2?: boolean | UserCountOutputTypeCountGamesAsPlayer2Args
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MathQuestionWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    questions: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | GameCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MathQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    gamesWon?: boolean | User$gamesWonArgs<ExtArgs>
    gamesAsPlayer1?: boolean | User$gamesAsPlayer1Args<ExtArgs>
    gamesAsPlayer2?: boolean | User$gamesAsPlayer2Args<ExtArgs>
    questions?: boolean | User$questionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "name" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesWon?: boolean | User$gamesWonArgs<ExtArgs>
    gamesAsPlayer1?: boolean | User$gamesAsPlayer1Args<ExtArgs>
    gamesAsPlayer2?: boolean | User$gamesAsPlayer2Args<ExtArgs>
    questions?: boolean | User$questionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gamesWon: Prisma.$GamePayload<ExtArgs>[]
      gamesAsPlayer1: Prisma.$GamePayload<ExtArgs>[]
      gamesAsPlayer2: Prisma.$GamePayload<ExtArgs>[]
      questions: Prisma.$MathQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      name: string | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gamesWon<T extends User$gamesWonArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesAsPlayer1<T extends User$gamesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, User$gamesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesAsPlayer2<T extends User$gamesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, User$gamesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.gamesWon
   */
  export type User$gamesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gamesAsPlayer1
   */
  export type User$gamesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gamesAsPlayer2
   */
  export type User$gamesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.questions
   */
  export type User$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    where?: MathQuestionWhereInput
    orderBy?: MathQuestionOrderByWithRelationInput | MathQuestionOrderByWithRelationInput[]
    cursor?: MathQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MathQuestionScalarFieldEnum | MathQuestionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.GameStatus | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.GameStatus | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    startedAt: number
    finishedAt: number
    status: number
    player1Id: number
    player2Id: number
    winnerId: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    startedAt: Date
    finishedAt: Date | null
    status: $Enums.GameStatus
    player1Id: string
    player2Id: string
    winnerId: string | null
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
    questions?: boolean | Game$questionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "startedAt" | "finishedAt" | "status" | "player1Id" | "player2Id" | "winnerId", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
    questions?: boolean | Game$questionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs>
      winner: Prisma.$UserPayload<ExtArgs> | null
      questions: Prisma.$MathQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      startedAt: Date
      finishedAt: Date | null
      status: $Enums.GameStatus
      player1Id: string
      player2Id: string
      winnerId: string | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends Game$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Game$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    questions<T extends Game$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
    readonly startedAt: FieldRef<"Game", 'DateTime'>
    readonly finishedAt: FieldRef<"Game", 'DateTime'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly player1Id: FieldRef<"Game", 'String'>
    readonly player2Id: FieldRef<"Game", 'String'>
    readonly winnerId: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.winner
   */
  export type Game$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Game.questions
   */
  export type Game$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    where?: MathQuestionWhereInput
    orderBy?: MathQuestionOrderByWithRelationInput | MathQuestionOrderByWithRelationInput[]
    cursor?: MathQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MathQuestionScalarFieldEnum | MathQuestionScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model MathQuestion
   */

  export type AggregateMathQuestion = {
    _count: MathQuestionCountAggregateOutputType | null
    _avg: MathQuestionAvgAggregateOutputType | null
    _sum: MathQuestionSumAggregateOutputType | null
    _min: MathQuestionMinAggregateOutputType | null
    _max: MathQuestionMaxAggregateOutputType | null
  }

  export type MathQuestionAvgAggregateOutputType = {
    score: number | null
    responseTimeMs: number | null
  }

  export type MathQuestionSumAggregateOutputType = {
    score: number | null
    responseTimeMs: number | null
  }

  export type MathQuestionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    question: string | null
    correctAnswer: string | null
    answer: string | null
    type: $Enums.MathQuestionType | null
    score: number | null
    responseTimeMs: number | null
    gameId: string | null
    playerId: string | null
  }

  export type MathQuestionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    question: string | null
    correctAnswer: string | null
    answer: string | null
    type: $Enums.MathQuestionType | null
    score: number | null
    responseTimeMs: number | null
    gameId: string | null
    playerId: string | null
  }

  export type MathQuestionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    question: number
    correctAnswer: number
    answer: number
    type: number
    score: number
    responseTimeMs: number
    gameId: number
    playerId: number
    _all: number
  }


  export type MathQuestionAvgAggregateInputType = {
    score?: true
    responseTimeMs?: true
  }

  export type MathQuestionSumAggregateInputType = {
    score?: true
    responseTimeMs?: true
  }

  export type MathQuestionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    question?: true
    correctAnswer?: true
    answer?: true
    type?: true
    score?: true
    responseTimeMs?: true
    gameId?: true
    playerId?: true
  }

  export type MathQuestionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    question?: true
    correctAnswer?: true
    answer?: true
    type?: true
    score?: true
    responseTimeMs?: true
    gameId?: true
    playerId?: true
  }

  export type MathQuestionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    question?: true
    correctAnswer?: true
    answer?: true
    type?: true
    score?: true
    responseTimeMs?: true
    gameId?: true
    playerId?: true
    _all?: true
  }

  export type MathQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MathQuestion to aggregate.
     */
    where?: MathQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MathQuestions to fetch.
     */
    orderBy?: MathQuestionOrderByWithRelationInput | MathQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MathQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MathQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MathQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MathQuestions
    **/
    _count?: true | MathQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MathQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MathQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MathQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MathQuestionMaxAggregateInputType
  }

  export type GetMathQuestionAggregateType<T extends MathQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateMathQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMathQuestion[P]>
      : GetScalarType<T[P], AggregateMathQuestion[P]>
  }




  export type MathQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MathQuestionWhereInput
    orderBy?: MathQuestionOrderByWithAggregationInput | MathQuestionOrderByWithAggregationInput[]
    by: MathQuestionScalarFieldEnum[] | MathQuestionScalarFieldEnum
    having?: MathQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MathQuestionCountAggregateInputType | true
    _avg?: MathQuestionAvgAggregateInputType
    _sum?: MathQuestionSumAggregateInputType
    _min?: MathQuestionMinAggregateInputType
    _max?: MathQuestionMaxAggregateInputType
  }

  export type MathQuestionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    question: string
    correctAnswer: string
    answer: string | null
    type: $Enums.MathQuestionType
    score: number
    responseTimeMs: number | null
    gameId: string
    playerId: string
    _count: MathQuestionCountAggregateOutputType | null
    _avg: MathQuestionAvgAggregateOutputType | null
    _sum: MathQuestionSumAggregateOutputType | null
    _min: MathQuestionMinAggregateOutputType | null
    _max: MathQuestionMaxAggregateOutputType | null
  }

  type GetMathQuestionGroupByPayload<T extends MathQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MathQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MathQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MathQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], MathQuestionGroupByOutputType[P]>
        }
      >
    >


  export type MathQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean
    correctAnswer?: boolean
    answer?: boolean
    type?: boolean
    score?: boolean
    responseTimeMs?: boolean
    gameId?: boolean
    playerId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mathQuestion"]>

  export type MathQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean
    correctAnswer?: boolean
    answer?: boolean
    type?: boolean
    score?: boolean
    responseTimeMs?: boolean
    gameId?: boolean
    playerId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mathQuestion"]>

  export type MathQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean
    correctAnswer?: boolean
    answer?: boolean
    type?: boolean
    score?: boolean
    responseTimeMs?: boolean
    gameId?: boolean
    playerId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mathQuestion"]>

  export type MathQuestionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean
    correctAnswer?: boolean
    answer?: boolean
    type?: boolean
    score?: boolean
    responseTimeMs?: boolean
    gameId?: boolean
    playerId?: boolean
  }

  export type MathQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "question" | "correctAnswer" | "answer" | "type" | "score" | "responseTimeMs" | "gameId" | "playerId", ExtArgs["result"]["mathQuestion"]>
  export type MathQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MathQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MathQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MathQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MathQuestion"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      player: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      question: string
      correctAnswer: string
      answer: string | null
      type: $Enums.MathQuestionType
      score: number
      responseTimeMs: number | null
      gameId: string
      playerId: string
    }, ExtArgs["result"]["mathQuestion"]>
    composites: {}
  }

  type MathQuestionGetPayload<S extends boolean | null | undefined | MathQuestionDefaultArgs> = $Result.GetResult<Prisma.$MathQuestionPayload, S>

  type MathQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MathQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MathQuestionCountAggregateInputType | true
    }

  export interface MathQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MathQuestion'], meta: { name: 'MathQuestion' } }
    /**
     * Find zero or one MathQuestion that matches the filter.
     * @param {MathQuestionFindUniqueArgs} args - Arguments to find a MathQuestion
     * @example
     * // Get one MathQuestion
     * const mathQuestion = await prisma.mathQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MathQuestionFindUniqueArgs>(args: SelectSubset<T, MathQuestionFindUniqueArgs<ExtArgs>>): Prisma__MathQuestionClient<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MathQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MathQuestionFindUniqueOrThrowArgs} args - Arguments to find a MathQuestion
     * @example
     * // Get one MathQuestion
     * const mathQuestion = await prisma.mathQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MathQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, MathQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MathQuestionClient<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MathQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MathQuestionFindFirstArgs} args - Arguments to find a MathQuestion
     * @example
     * // Get one MathQuestion
     * const mathQuestion = await prisma.mathQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MathQuestionFindFirstArgs>(args?: SelectSubset<T, MathQuestionFindFirstArgs<ExtArgs>>): Prisma__MathQuestionClient<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MathQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MathQuestionFindFirstOrThrowArgs} args - Arguments to find a MathQuestion
     * @example
     * // Get one MathQuestion
     * const mathQuestion = await prisma.mathQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MathQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, MathQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MathQuestionClient<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MathQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MathQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MathQuestions
     * const mathQuestions = await prisma.mathQuestion.findMany()
     * 
     * // Get first 10 MathQuestions
     * const mathQuestions = await prisma.mathQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mathQuestionWithIdOnly = await prisma.mathQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MathQuestionFindManyArgs>(args?: SelectSubset<T, MathQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MathQuestion.
     * @param {MathQuestionCreateArgs} args - Arguments to create a MathQuestion.
     * @example
     * // Create one MathQuestion
     * const MathQuestion = await prisma.mathQuestion.create({
     *   data: {
     *     // ... data to create a MathQuestion
     *   }
     * })
     * 
     */
    create<T extends MathQuestionCreateArgs>(args: SelectSubset<T, MathQuestionCreateArgs<ExtArgs>>): Prisma__MathQuestionClient<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MathQuestions.
     * @param {MathQuestionCreateManyArgs} args - Arguments to create many MathQuestions.
     * @example
     * // Create many MathQuestions
     * const mathQuestion = await prisma.mathQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MathQuestionCreateManyArgs>(args?: SelectSubset<T, MathQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MathQuestions and returns the data saved in the database.
     * @param {MathQuestionCreateManyAndReturnArgs} args - Arguments to create many MathQuestions.
     * @example
     * // Create many MathQuestions
     * const mathQuestion = await prisma.mathQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MathQuestions and only return the `id`
     * const mathQuestionWithIdOnly = await prisma.mathQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MathQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, MathQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MathQuestion.
     * @param {MathQuestionDeleteArgs} args - Arguments to delete one MathQuestion.
     * @example
     * // Delete one MathQuestion
     * const MathQuestion = await prisma.mathQuestion.delete({
     *   where: {
     *     // ... filter to delete one MathQuestion
     *   }
     * })
     * 
     */
    delete<T extends MathQuestionDeleteArgs>(args: SelectSubset<T, MathQuestionDeleteArgs<ExtArgs>>): Prisma__MathQuestionClient<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MathQuestion.
     * @param {MathQuestionUpdateArgs} args - Arguments to update one MathQuestion.
     * @example
     * // Update one MathQuestion
     * const mathQuestion = await prisma.mathQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MathQuestionUpdateArgs>(args: SelectSubset<T, MathQuestionUpdateArgs<ExtArgs>>): Prisma__MathQuestionClient<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MathQuestions.
     * @param {MathQuestionDeleteManyArgs} args - Arguments to filter MathQuestions to delete.
     * @example
     * // Delete a few MathQuestions
     * const { count } = await prisma.mathQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MathQuestionDeleteManyArgs>(args?: SelectSubset<T, MathQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MathQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MathQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MathQuestions
     * const mathQuestion = await prisma.mathQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MathQuestionUpdateManyArgs>(args: SelectSubset<T, MathQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MathQuestions and returns the data updated in the database.
     * @param {MathQuestionUpdateManyAndReturnArgs} args - Arguments to update many MathQuestions.
     * @example
     * // Update many MathQuestions
     * const mathQuestion = await prisma.mathQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MathQuestions and only return the `id`
     * const mathQuestionWithIdOnly = await prisma.mathQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends MathQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, MathQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MathQuestion.
     * @param {MathQuestionUpsertArgs} args - Arguments to update or create a MathQuestion.
     * @example
     * // Update or create a MathQuestion
     * const mathQuestion = await prisma.mathQuestion.upsert({
     *   create: {
     *     // ... data to create a MathQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MathQuestion we want to update
     *   }
     * })
     */
    upsert<T extends MathQuestionUpsertArgs>(args: SelectSubset<T, MathQuestionUpsertArgs<ExtArgs>>): Prisma__MathQuestionClient<$Result.GetResult<Prisma.$MathQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MathQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MathQuestionCountArgs} args - Arguments to filter MathQuestions to count.
     * @example
     * // Count the number of MathQuestions
     * const count = await prisma.mathQuestion.count({
     *   where: {
     *     // ... the filter for the MathQuestions we want to count
     *   }
     * })
    **/
    count<T extends MathQuestionCountArgs>(
      args?: Subset<T, MathQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MathQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MathQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MathQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MathQuestionAggregateArgs>(args: Subset<T, MathQuestionAggregateArgs>): Prisma.PrismaPromise<GetMathQuestionAggregateType<T>>

    /**
     * Group by MathQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MathQuestionGroupByArgs} args - Group by arguments.
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
      T extends MathQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MathQuestionGroupByArgs['orderBy'] }
        : { orderBy?: MathQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MathQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMathQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MathQuestion model
   */
  readonly fields: MathQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MathQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MathQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MathQuestion model
   */
  interface MathQuestionFieldRefs {
    readonly id: FieldRef<"MathQuestion", 'String'>
    readonly createdAt: FieldRef<"MathQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"MathQuestion", 'DateTime'>
    readonly question: FieldRef<"MathQuestion", 'String'>
    readonly correctAnswer: FieldRef<"MathQuestion", 'String'>
    readonly answer: FieldRef<"MathQuestion", 'String'>
    readonly type: FieldRef<"MathQuestion", 'MathQuestionType'>
    readonly score: FieldRef<"MathQuestion", 'Int'>
    readonly responseTimeMs: FieldRef<"MathQuestion", 'Int'>
    readonly gameId: FieldRef<"MathQuestion", 'String'>
    readonly playerId: FieldRef<"MathQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MathQuestion findUnique
   */
  export type MathQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MathQuestion to fetch.
     */
    where: MathQuestionWhereUniqueInput
  }

  /**
   * MathQuestion findUniqueOrThrow
   */
  export type MathQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MathQuestion to fetch.
     */
    where: MathQuestionWhereUniqueInput
  }

  /**
   * MathQuestion findFirst
   */
  export type MathQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MathQuestion to fetch.
     */
    where?: MathQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MathQuestions to fetch.
     */
    orderBy?: MathQuestionOrderByWithRelationInput | MathQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MathQuestions.
     */
    cursor?: MathQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MathQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MathQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MathQuestions.
     */
    distinct?: MathQuestionScalarFieldEnum | MathQuestionScalarFieldEnum[]
  }

  /**
   * MathQuestion findFirstOrThrow
   */
  export type MathQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MathQuestion to fetch.
     */
    where?: MathQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MathQuestions to fetch.
     */
    orderBy?: MathQuestionOrderByWithRelationInput | MathQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MathQuestions.
     */
    cursor?: MathQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MathQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MathQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MathQuestions.
     */
    distinct?: MathQuestionScalarFieldEnum | MathQuestionScalarFieldEnum[]
  }

  /**
   * MathQuestion findMany
   */
  export type MathQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MathQuestions to fetch.
     */
    where?: MathQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MathQuestions to fetch.
     */
    orderBy?: MathQuestionOrderByWithRelationInput | MathQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MathQuestions.
     */
    cursor?: MathQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MathQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MathQuestions.
     */
    skip?: number
    distinct?: MathQuestionScalarFieldEnum | MathQuestionScalarFieldEnum[]
  }

  /**
   * MathQuestion create
   */
  export type MathQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a MathQuestion.
     */
    data: XOR<MathQuestionCreateInput, MathQuestionUncheckedCreateInput>
  }

  /**
   * MathQuestion createMany
   */
  export type MathQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MathQuestions.
     */
    data: MathQuestionCreateManyInput | MathQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MathQuestion createManyAndReturn
   */
  export type MathQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many MathQuestions.
     */
    data: MathQuestionCreateManyInput | MathQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MathQuestion update
   */
  export type MathQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a MathQuestion.
     */
    data: XOR<MathQuestionUpdateInput, MathQuestionUncheckedUpdateInput>
    /**
     * Choose, which MathQuestion to update.
     */
    where: MathQuestionWhereUniqueInput
  }

  /**
   * MathQuestion updateMany
   */
  export type MathQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MathQuestions.
     */
    data: XOR<MathQuestionUpdateManyMutationInput, MathQuestionUncheckedUpdateManyInput>
    /**
     * Filter which MathQuestions to update
     */
    where?: MathQuestionWhereInput
    /**
     * Limit how many MathQuestions to update.
     */
    limit?: number
  }

  /**
   * MathQuestion updateManyAndReturn
   */
  export type MathQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * The data used to update MathQuestions.
     */
    data: XOR<MathQuestionUpdateManyMutationInput, MathQuestionUncheckedUpdateManyInput>
    /**
     * Filter which MathQuestions to update
     */
    where?: MathQuestionWhereInput
    /**
     * Limit how many MathQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MathQuestion upsert
   */
  export type MathQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the MathQuestion to update in case it exists.
     */
    where: MathQuestionWhereUniqueInput
    /**
     * In case the MathQuestion found by the `where` argument doesn't exist, create a new MathQuestion with this data.
     */
    create: XOR<MathQuestionCreateInput, MathQuestionUncheckedCreateInput>
    /**
     * In case the MathQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MathQuestionUpdateInput, MathQuestionUncheckedUpdateInput>
  }

  /**
   * MathQuestion delete
   */
  export type MathQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
    /**
     * Filter which MathQuestion to delete.
     */
    where: MathQuestionWhereUniqueInput
  }

  /**
   * MathQuestion deleteMany
   */
  export type MathQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MathQuestions to delete
     */
    where?: MathQuestionWhereInput
    /**
     * Limit how many MathQuestions to delete.
     */
    limit?: number
  }

  /**
   * MathQuestion without action
   */
  export type MathQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MathQuestion
     */
    select?: MathQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MathQuestion
     */
    omit?: MathQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MathQuestionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    status: 'status',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    winnerId: 'winnerId'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const MathQuestionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    question: 'question',
    correctAnswer: 'correctAnswer',
    answer: 'answer',
    type: 'type',
    score: 'score',
    responseTimeMs: 'responseTimeMs',
    gameId: 'gameId',
    playerId: 'playerId'
  };

  export type MathQuestionScalarFieldEnum = (typeof MathQuestionScalarFieldEnum)[keyof typeof MathQuestionScalarFieldEnum]


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
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'MathQuestionType'
   */
  export type EnumMathQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MathQuestionType'>
    


  /**
   * Reference to a field of type 'MathQuestionType[]'
   */
  export type ListEnumMathQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MathQuestionType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    gamesWon?: GameListRelationFilter
    gamesAsPlayer1?: GameListRelationFilter
    gamesAsPlayer2?: GameListRelationFilter
    questions?: MathQuestionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    gamesWon?: GameOrderByRelationAggregateInput
    gamesAsPlayer1?: GameOrderByRelationAggregateInput
    gamesAsPlayer2?: GameOrderByRelationAggregateInput
    questions?: MathQuestionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    gamesWon?: GameListRelationFilter
    gamesAsPlayer1?: GameListRelationFilter
    gamesAsPlayer2?: GameListRelationFilter
    questions?: MathQuestionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    startedAt?: DateTimeFilter<"Game"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    player1Id?: StringFilter<"Game"> | string
    player2Id?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    questions?: MathQuestionListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    winner?: UserOrderByWithRelationInput
    questions?: MathQuestionOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    startedAt?: DateTimeFilter<"Game"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    player1Id?: StringFilter<"Game"> | string
    player2Id?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    questions?: MathQuestionListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    startedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    player1Id?: StringWithAggregatesFilter<"Game"> | string
    player2Id?: StringWithAggregatesFilter<"Game"> | string
    winnerId?: StringNullableWithAggregatesFilter<"Game"> | string | null
  }

  export type MathQuestionWhereInput = {
    AND?: MathQuestionWhereInput | MathQuestionWhereInput[]
    OR?: MathQuestionWhereInput[]
    NOT?: MathQuestionWhereInput | MathQuestionWhereInput[]
    id?: StringFilter<"MathQuestion"> | string
    createdAt?: DateTimeFilter<"MathQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"MathQuestion"> | Date | string
    question?: StringFilter<"MathQuestion"> | string
    correctAnswer?: StringFilter<"MathQuestion"> | string
    answer?: StringNullableFilter<"MathQuestion"> | string | null
    type?: EnumMathQuestionTypeFilter<"MathQuestion"> | $Enums.MathQuestionType
    score?: IntFilter<"MathQuestion"> | number
    responseTimeMs?: IntNullableFilter<"MathQuestion"> | number | null
    gameId?: StringFilter<"MathQuestion"> | string
    playerId?: StringFilter<"MathQuestion"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MathQuestionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    answer?: SortOrderInput | SortOrder
    type?: SortOrder
    score?: SortOrder
    responseTimeMs?: SortOrderInput | SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    game?: GameOrderByWithRelationInput
    player?: UserOrderByWithRelationInput
  }

  export type MathQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MathQuestionWhereInput | MathQuestionWhereInput[]
    OR?: MathQuestionWhereInput[]
    NOT?: MathQuestionWhereInput | MathQuestionWhereInput[]
    createdAt?: DateTimeFilter<"MathQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"MathQuestion"> | Date | string
    question?: StringFilter<"MathQuestion"> | string
    correctAnswer?: StringFilter<"MathQuestion"> | string
    answer?: StringNullableFilter<"MathQuestion"> | string | null
    type?: EnumMathQuestionTypeFilter<"MathQuestion"> | $Enums.MathQuestionType
    score?: IntFilter<"MathQuestion"> | number
    responseTimeMs?: IntNullableFilter<"MathQuestion"> | number | null
    gameId?: StringFilter<"MathQuestion"> | string
    playerId?: StringFilter<"MathQuestion"> | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MathQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    answer?: SortOrderInput | SortOrder
    type?: SortOrder
    score?: SortOrder
    responseTimeMs?: SortOrderInput | SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    _count?: MathQuestionCountOrderByAggregateInput
    _avg?: MathQuestionAvgOrderByAggregateInput
    _max?: MathQuestionMaxOrderByAggregateInput
    _min?: MathQuestionMinOrderByAggregateInput
    _sum?: MathQuestionSumOrderByAggregateInput
  }

  export type MathQuestionScalarWhereWithAggregatesInput = {
    AND?: MathQuestionScalarWhereWithAggregatesInput | MathQuestionScalarWhereWithAggregatesInput[]
    OR?: MathQuestionScalarWhereWithAggregatesInput[]
    NOT?: MathQuestionScalarWhereWithAggregatesInput | MathQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MathQuestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MathQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MathQuestion"> | Date | string
    question?: StringWithAggregatesFilter<"MathQuestion"> | string
    correctAnswer?: StringWithAggregatesFilter<"MathQuestion"> | string
    answer?: StringNullableWithAggregatesFilter<"MathQuestion"> | string | null
    type?: EnumMathQuestionTypeWithAggregatesFilter<"MathQuestion"> | $Enums.MathQuestionType
    score?: IntWithAggregatesFilter<"MathQuestion"> | number
    responseTimeMs?: IntNullableWithAggregatesFilter<"MathQuestion"> | number | null
    gameId?: StringWithAggregatesFilter<"MathQuestion"> | string
    playerId?: StringWithAggregatesFilter<"MathQuestion"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    questions?: MathQuestionCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    questions?: MathQuestionUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    questions?: MathQuestionUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    questions?: MathQuestionUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2: UserCreateNestedOneWithoutGamesAsPlayer2Input
    winner?: UserCreateNestedOneWithoutGamesWonInput
    questions?: MathQuestionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1Id: string
    player2Id: string
    winnerId?: string | null
    questions?: MathQuestionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1?: UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutGamesAsPlayer2NestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
    questions?: MathQuestionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: MathQuestionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1Id: string
    player2Id: string
    winnerId?: string | null
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MathQuestionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    game: GameCreateNestedOneWithoutQuestionsInput
    player: UserCreateNestedOneWithoutQuestionsInput
  }

  export type MathQuestionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    gameId: string
    playerId: string
  }

  export type MathQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutQuestionsNestedInput
    player?: UserUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type MathQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type MathQuestionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    gameId: string
    playerId: string
  }

  export type MathQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MathQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
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

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type MathQuestionListRelationFilter = {
    every?: MathQuestionWhereInput
    some?: MathQuestionWhereInput
    none?: MathQuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MathQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type EnumMathQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MathQuestionType | EnumMathQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MathQuestionType[] | ListEnumMathQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MathQuestionType[] | ListEnumMathQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMathQuestionTypeFilter<$PrismaModel> | $Enums.MathQuestionType
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

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type MathQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    score?: SortOrder
    responseTimeMs?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
  }

  export type MathQuestionAvgOrderByAggregateInput = {
    score?: SortOrder
    responseTimeMs?: SortOrder
  }

  export type MathQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    score?: SortOrder
    responseTimeMs?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
  }

  export type MathQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    score?: SortOrder
    responseTimeMs?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
  }

  export type MathQuestionSumOrderByAggregateInput = {
    score?: SortOrder
    responseTimeMs?: SortOrder
  }

  export type EnumMathQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MathQuestionType | EnumMathQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MathQuestionType[] | ListEnumMathQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MathQuestionType[] | ListEnumMathQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMathQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MathQuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMathQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumMathQuestionTypeFilter<$PrismaModel>
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

  export type GameCreateNestedManyWithoutWinnerInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type MathQuestionCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MathQuestionCreateWithoutPlayerInput, MathQuestionUncheckedCreateWithoutPlayerInput> | MathQuestionCreateWithoutPlayerInput[] | MathQuestionUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MathQuestionCreateOrConnectWithoutPlayerInput | MathQuestionCreateOrConnectWithoutPlayerInput[]
    createMany?: MathQuestionCreateManyPlayerInputEnvelope
    connect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type MathQuestionUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MathQuestionCreateWithoutPlayerInput, MathQuestionUncheckedCreateWithoutPlayerInput> | MathQuestionCreateWithoutPlayerInput[] | MathQuestionUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MathQuestionCreateOrConnectWithoutPlayerInput | MathQuestionCreateOrConnectWithoutPlayerInput[]
    createMany?: MathQuestionCreateManyPlayerInputEnvelope
    connect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
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

  export type GameUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWinnerInput | GameUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWinnerInput | GameUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWinnerInput | GameUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer1Input | GameUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer1Input | GameUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer1Input | GameUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer2Input | GameUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer2Input | GameUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer2Input | GameUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type MathQuestionUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MathQuestionCreateWithoutPlayerInput, MathQuestionUncheckedCreateWithoutPlayerInput> | MathQuestionCreateWithoutPlayerInput[] | MathQuestionUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MathQuestionCreateOrConnectWithoutPlayerInput | MathQuestionCreateOrConnectWithoutPlayerInput[]
    upsert?: MathQuestionUpsertWithWhereUniqueWithoutPlayerInput | MathQuestionUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MathQuestionCreateManyPlayerInputEnvelope
    set?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    disconnect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    delete?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    connect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    update?: MathQuestionUpdateWithWhereUniqueWithoutPlayerInput | MathQuestionUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MathQuestionUpdateManyWithWhereWithoutPlayerInput | MathQuestionUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MathQuestionScalarWhereInput | MathQuestionScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWinnerInput | GameUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWinnerInput | GameUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWinnerInput | GameUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer1Input | GameUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer1Input | GameUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer1Input | GameUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer2Input | GameUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer2Input | GameUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer2Input | GameUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type MathQuestionUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MathQuestionCreateWithoutPlayerInput, MathQuestionUncheckedCreateWithoutPlayerInput> | MathQuestionCreateWithoutPlayerInput[] | MathQuestionUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MathQuestionCreateOrConnectWithoutPlayerInput | MathQuestionCreateOrConnectWithoutPlayerInput[]
    upsert?: MathQuestionUpsertWithWhereUniqueWithoutPlayerInput | MathQuestionUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MathQuestionCreateManyPlayerInputEnvelope
    set?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    disconnect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    delete?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    connect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    update?: MathQuestionUpdateWithWhereUniqueWithoutPlayerInput | MathQuestionUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MathQuestionUpdateManyWithWhereWithoutPlayerInput | MathQuestionUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MathQuestionScalarWhereInput | MathQuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGamesAsPlayer1Input = {
    create?: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesAsPlayer2Input = {
    create?: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer2Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesWonInput = {
    create?: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesWonInput
    connect?: UserWhereUniqueInput
  }

  export type MathQuestionCreateNestedManyWithoutGameInput = {
    create?: XOR<MathQuestionCreateWithoutGameInput, MathQuestionUncheckedCreateWithoutGameInput> | MathQuestionCreateWithoutGameInput[] | MathQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MathQuestionCreateOrConnectWithoutGameInput | MathQuestionCreateOrConnectWithoutGameInput[]
    createMany?: MathQuestionCreateManyGameInputEnvelope
    connect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
  }

  export type MathQuestionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<MathQuestionCreateWithoutGameInput, MathQuestionUncheckedCreateWithoutGameInput> | MathQuestionCreateWithoutGameInput[] | MathQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MathQuestionCreateOrConnectWithoutGameInput | MathQuestionCreateOrConnectWithoutGameInput[]
    createMany?: MathQuestionCreateManyGameInputEnvelope
    connect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput = {
    create?: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer1Input
    upsert?: UserUpsertWithoutGamesAsPlayer1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsPlayer1Input, UserUpdateWithoutGamesAsPlayer1Input>, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
  }

  export type UserUpdateOneRequiredWithoutGamesAsPlayer2NestedInput = {
    create?: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer2Input
    upsert?: UserUpsertWithoutGamesAsPlayer2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsPlayer2Input, UserUpdateWithoutGamesAsPlayer2Input>, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
  }

  export type UserUpdateOneWithoutGamesWonNestedInput = {
    create?: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesWonInput
    upsert?: UserUpsertWithoutGamesWonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesWonInput, UserUpdateWithoutGamesWonInput>, UserUncheckedUpdateWithoutGamesWonInput>
  }

  export type MathQuestionUpdateManyWithoutGameNestedInput = {
    create?: XOR<MathQuestionCreateWithoutGameInput, MathQuestionUncheckedCreateWithoutGameInput> | MathQuestionCreateWithoutGameInput[] | MathQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MathQuestionCreateOrConnectWithoutGameInput | MathQuestionCreateOrConnectWithoutGameInput[]
    upsert?: MathQuestionUpsertWithWhereUniqueWithoutGameInput | MathQuestionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MathQuestionCreateManyGameInputEnvelope
    set?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    disconnect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    delete?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    connect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    update?: MathQuestionUpdateWithWhereUniqueWithoutGameInput | MathQuestionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MathQuestionUpdateManyWithWhereWithoutGameInput | MathQuestionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MathQuestionScalarWhereInput | MathQuestionScalarWhereInput[]
  }

  export type MathQuestionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<MathQuestionCreateWithoutGameInput, MathQuestionUncheckedCreateWithoutGameInput> | MathQuestionCreateWithoutGameInput[] | MathQuestionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MathQuestionCreateOrConnectWithoutGameInput | MathQuestionCreateOrConnectWithoutGameInput[]
    upsert?: MathQuestionUpsertWithWhereUniqueWithoutGameInput | MathQuestionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MathQuestionCreateManyGameInputEnvelope
    set?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    disconnect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    delete?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    connect?: MathQuestionWhereUniqueInput | MathQuestionWhereUniqueInput[]
    update?: MathQuestionUpdateWithWhereUniqueWithoutGameInput | MathQuestionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MathQuestionUpdateManyWithWhereWithoutGameInput | MathQuestionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MathQuestionScalarWhereInput | MathQuestionScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<GameCreateWithoutQuestionsInput, GameUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutQuestionsInput
    connect?: GameWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMathQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.MathQuestionType
  }

  export type IntFieldUpdateOperationsInput = {
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

  export type GameUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<GameCreateWithoutQuestionsInput, GameUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutQuestionsInput
    upsert?: GameUpsertWithoutQuestionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutQuestionsInput, GameUpdateWithoutQuestionsInput>, GameUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    upsert?: UserUpsertWithoutQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionsInput, UserUpdateWithoutQuestionsInput>, UserUncheckedUpdateWithoutQuestionsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedEnumMathQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MathQuestionType | EnumMathQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MathQuestionType[] | ListEnumMathQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MathQuestionType[] | ListEnumMathQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMathQuestionTypeFilter<$PrismaModel> | $Enums.MathQuestionType
  }

  export type NestedEnumMathQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MathQuestionType | EnumMathQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MathQuestionType[] | ListEnumMathQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MathQuestionType[] | ListEnumMathQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMathQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MathQuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMathQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumMathQuestionTypeFilter<$PrismaModel>
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

  export type GameCreateWithoutWinnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2: UserCreateNestedOneWithoutGamesAsPlayer2Input
    questions?: MathQuestionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutWinnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1Id: string
    player2Id: string
    questions?: MathQuestionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutWinnerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput>
  }

  export type GameCreateManyWinnerInputEnvelope = {
    data: GameCreateManyWinnerInput | GameCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutPlayer1Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player2: UserCreateNestedOneWithoutGamesAsPlayer2Input
    winner?: UserCreateNestedOneWithoutGamesWonInput
    questions?: MathQuestionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayer1Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player2Id: string
    winnerId?: string | null
    questions?: MathQuestionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input>
  }

  export type GameCreateManyPlayer1InputEnvelope = {
    data: GameCreateManyPlayer1Input | GameCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutPlayer2Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1: UserCreateNestedOneWithoutGamesAsPlayer1Input
    winner?: UserCreateNestedOneWithoutGamesWonInput
    questions?: MathQuestionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayer2Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1Id: string
    winnerId?: string | null
    questions?: MathQuestionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input>
  }

  export type GameCreateManyPlayer2InputEnvelope = {
    data: GameCreateManyPlayer2Input | GameCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type MathQuestionCreateWithoutPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    game: GameCreateNestedOneWithoutQuestionsInput
  }

  export type MathQuestionUncheckedCreateWithoutPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    gameId: string
  }

  export type MathQuestionCreateOrConnectWithoutPlayerInput = {
    where: MathQuestionWhereUniqueInput
    create: XOR<MathQuestionCreateWithoutPlayerInput, MathQuestionUncheckedCreateWithoutPlayerInput>
  }

  export type MathQuestionCreateManyPlayerInputEnvelope = {
    data: MathQuestionCreateManyPlayerInput | MathQuestionCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutWinnerInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutWinnerInput, GameUncheckedUpdateWithoutWinnerInput>
    create: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput>
  }

  export type GameUpdateWithWhereUniqueWithoutWinnerInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutWinnerInput, GameUncheckedUpdateWithoutWinnerInput>
  }

  export type GameUpdateManyWithWhereWithoutWinnerInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutWinnerInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    startedAt?: DateTimeFilter<"Game"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Game"> | Date | string | null
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    player1Id?: StringFilter<"Game"> | string
    player2Id?: StringFilter<"Game"> | string
    winnerId?: StringNullableFilter<"Game"> | string | null
  }

  export type GameUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayer1Input, GameUncheckedUpdateWithoutPlayer1Input>
    create: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayer1Input, GameUncheckedUpdateWithoutPlayer1Input>
  }

  export type GameUpdateManyWithWhereWithoutPlayer1Input = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type GameUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayer2Input, GameUncheckedUpdateWithoutPlayer2Input>
    create: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayer2Input, GameUncheckedUpdateWithoutPlayer2Input>
  }

  export type GameUpdateManyWithWhereWithoutPlayer2Input = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type MathQuestionUpsertWithWhereUniqueWithoutPlayerInput = {
    where: MathQuestionWhereUniqueInput
    update: XOR<MathQuestionUpdateWithoutPlayerInput, MathQuestionUncheckedUpdateWithoutPlayerInput>
    create: XOR<MathQuestionCreateWithoutPlayerInput, MathQuestionUncheckedCreateWithoutPlayerInput>
  }

  export type MathQuestionUpdateWithWhereUniqueWithoutPlayerInput = {
    where: MathQuestionWhereUniqueInput
    data: XOR<MathQuestionUpdateWithoutPlayerInput, MathQuestionUncheckedUpdateWithoutPlayerInput>
  }

  export type MathQuestionUpdateManyWithWhereWithoutPlayerInput = {
    where: MathQuestionScalarWhereInput
    data: XOR<MathQuestionUpdateManyMutationInput, MathQuestionUncheckedUpdateManyWithoutPlayerInput>
  }

  export type MathQuestionScalarWhereInput = {
    AND?: MathQuestionScalarWhereInput | MathQuestionScalarWhereInput[]
    OR?: MathQuestionScalarWhereInput[]
    NOT?: MathQuestionScalarWhereInput | MathQuestionScalarWhereInput[]
    id?: StringFilter<"MathQuestion"> | string
    createdAt?: DateTimeFilter<"MathQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"MathQuestion"> | Date | string
    question?: StringFilter<"MathQuestion"> | string
    correctAnswer?: StringFilter<"MathQuestion"> | string
    answer?: StringNullableFilter<"MathQuestion"> | string | null
    type?: EnumMathQuestionTypeFilter<"MathQuestion"> | $Enums.MathQuestionType
    score?: IntFilter<"MathQuestion"> | number
    responseTimeMs?: IntNullableFilter<"MathQuestion"> | number | null
    gameId?: StringFilter<"MathQuestion"> | string
    playerId?: StringFilter<"MathQuestion"> | string
  }

  export type UserCreateWithoutGamesAsPlayer1Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    questions?: MathQuestionCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutGamesAsPlayer1Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    questions?: MathQuestionUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutGamesAsPlayer1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
  }

  export type UserCreateWithoutGamesAsPlayer2Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    questions?: MathQuestionCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutGamesAsPlayer2Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    questions?: MathQuestionUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutGamesAsPlayer2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
  }

  export type UserCreateWithoutGamesWonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    questions?: MathQuestionCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutGamesWonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    questions?: MathQuestionUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutGamesWonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
  }

  export type MathQuestionCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    player: UserCreateNestedOneWithoutQuestionsInput
  }

  export type MathQuestionUncheckedCreateWithoutGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    playerId: string
  }

  export type MathQuestionCreateOrConnectWithoutGameInput = {
    where: MathQuestionWhereUniqueInput
    create: XOR<MathQuestionCreateWithoutGameInput, MathQuestionUncheckedCreateWithoutGameInput>
  }

  export type MathQuestionCreateManyGameInputEnvelope = {
    data: MathQuestionCreateManyGameInput | MathQuestionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesAsPlayer1Input = {
    update: XOR<UserUpdateWithoutGamesAsPlayer1Input, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
    create: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsPlayer1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsPlayer1Input, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
  }

  export type UserUpdateWithoutGamesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    questions?: MathQuestionUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    questions?: MathQuestionUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutGamesAsPlayer2Input = {
    update: XOR<UserUpdateWithoutGamesAsPlayer2Input, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
    create: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsPlayer2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsPlayer2Input, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
  }

  export type UserUpdateWithoutGamesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    questions?: MathQuestionUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    questions?: MathQuestionUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutGamesWonInput = {
    update: XOR<UserUpdateWithoutGamesWonInput, UserUncheckedUpdateWithoutGamesWonInput>
    create: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesWonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesWonInput, UserUncheckedUpdateWithoutGamesWonInput>
  }

  export type UserUpdateWithoutGamesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    questions?: MathQuestionUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    questions?: MathQuestionUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type MathQuestionUpsertWithWhereUniqueWithoutGameInput = {
    where: MathQuestionWhereUniqueInput
    update: XOR<MathQuestionUpdateWithoutGameInput, MathQuestionUncheckedUpdateWithoutGameInput>
    create: XOR<MathQuestionCreateWithoutGameInput, MathQuestionUncheckedCreateWithoutGameInput>
  }

  export type MathQuestionUpdateWithWhereUniqueWithoutGameInput = {
    where: MathQuestionWhereUniqueInput
    data: XOR<MathQuestionUpdateWithoutGameInput, MathQuestionUncheckedUpdateWithoutGameInput>
  }

  export type MathQuestionUpdateManyWithWhereWithoutGameInput = {
    where: MathQuestionScalarWhereInput
    data: XOR<MathQuestionUpdateManyMutationInput, MathQuestionUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2: UserCreateNestedOneWithoutGamesAsPlayer2Input
    winner?: UserCreateNestedOneWithoutGamesWonInput
  }

  export type GameUncheckedCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1Id: string
    player2Id: string
    winnerId?: string | null
  }

  export type GameCreateOrConnectWithoutQuestionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutQuestionsInput, GameUncheckedCreateWithoutQuestionsInput>
  }

  export type UserCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    image?: string | null
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
  }

  export type GameUpsertWithoutQuestionsInput = {
    update: XOR<GameUpdateWithoutQuestionsInput, GameUncheckedUpdateWithoutQuestionsInput>
    create: XOR<GameCreateWithoutQuestionsInput, GameUncheckedCreateWithoutQuestionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutQuestionsInput, GameUncheckedUpdateWithoutQuestionsInput>
  }

  export type GameUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1?: UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutGamesAsPlayer2NestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
  }

  export type GameUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type GameCreateManyWinnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1Id: string
    player2Id: string
  }

  export type GameCreateManyPlayer1Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player2Id: string
    winnerId?: string | null
  }

  export type GameCreateManyPlayer2Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.GameStatus
    player1Id: string
    winnerId?: string | null
  }

  export type MathQuestionCreateManyPlayerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    gameId: string
  }

  export type GameUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1?: UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutGamesAsPlayer2NestedInput
    questions?: MathQuestionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    questions?: MathQuestionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
  }

  export type GameUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player2?: UserUpdateOneRequiredWithoutGamesAsPlayer2NestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
    questions?: MathQuestionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: MathQuestionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1?: UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
    questions?: MathQuestionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: MathQuestionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    player1Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MathQuestionUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type MathQuestionUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type MathQuestionUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type MathQuestionCreateManyGameInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    correctAnswer: string
    answer?: string | null
    type?: $Enums.MathQuestionType
    score?: number
    responseTimeMs?: number | null
    playerId: string
  }

  export type MathQuestionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    player?: UserUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type MathQuestionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type MathQuestionUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMathQuestionTypeFieldUpdateOperationsInput | $Enums.MathQuestionType
    score?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    playerId?: StringFieldUpdateOperationsInput | string
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