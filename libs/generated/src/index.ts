export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: string;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "example" */
export type Example = {
  __typename?: 'example';
  id: Scalars['uuid'];
  test_text: Scalars['String'];
};

/** aggregated selection of "example" */
export type Example_Aggregate = {
  __typename?: 'example_aggregate';
  aggregate?: Maybe<Example_Aggregate_Fields>;
  nodes: Array<Example>;
};

/** aggregate fields of "example" */
export type Example_Aggregate_Fields = {
  __typename?: 'example_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Example_Max_Fields>;
  min?: Maybe<Example_Min_Fields>;
};

/** aggregate fields of "example" */
export type Example_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Example_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "example". All fields are combined with a logical 'AND'. */
export type Example_Bool_Exp = {
  _and?: InputMaybe<Array<Example_Bool_Exp>>;
  _not?: InputMaybe<Example_Bool_Exp>;
  _or?: InputMaybe<Array<Example_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  test_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "example" */
export enum Example_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestPkey = 'test_pkey',
}

/** input type for inserting data into table "example" */
export type Example_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  test_text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Example_Max_Fields = {
  __typename?: 'example_max_fields';
  id?: Maybe<Scalars['uuid']>;
  test_text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Example_Min_Fields = {
  __typename?: 'example_min_fields';
  id?: Maybe<Scalars['uuid']>;
  test_text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "example" */
export type Example_Mutation_Response = {
  __typename?: 'example_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Example>;
};

/** on_conflict condition type for table "example" */
export type Example_On_Conflict = {
  constraint: Example_Constraint;
  update_columns?: Array<Example_Update_Column>;
  where?: InputMaybe<Example_Bool_Exp>;
};

/** Ordering options when selecting data from "example". */
export type Example_Order_By = {
  id?: InputMaybe<Order_By>;
  test_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: example */
export type Example_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "example" */
export enum Example_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TestText = 'test_text',
}

/** input type for updating data in table "example" */
export type Example_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  test_text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "example" */
export enum Example_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TestText = 'test_text',
}

export type Example_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Example_Set_Input>;
  where: Example_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "example" */
  delete_example?: Maybe<Example_Mutation_Response>;
  /** delete single row from the table: "example" */
  delete_example_by_pk?: Maybe<Example>;
  /** insert data into the table: "example" */
  insert_example?: Maybe<Example_Mutation_Response>;
  /** insert a single row into the table: "example" */
  insert_example_one?: Maybe<Example>;
  /** update data of the table: "example" */
  update_example?: Maybe<Example_Mutation_Response>;
  /** update single row of the table: "example" */
  update_example_by_pk?: Maybe<Example>;
  /** update multiples rows of table: "example" */
  update_example_many?: Maybe<Array<Maybe<Example_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_ExampleArgs = {
  where: Example_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Example_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_ExampleArgs = {
  objects: Array<Example_Insert_Input>;
  on_conflict?: InputMaybe<Example_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Example_OneArgs = {
  object: Example_Insert_Input;
  on_conflict?: InputMaybe<Example_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ExampleArgs = {
  _set?: InputMaybe<Example_Set_Input>;
  where: Example_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Example_By_PkArgs = {
  _set?: InputMaybe<Example_Set_Input>;
  pk_columns: Example_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Example_ManyArgs = {
  updates: Array<Example_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "example" */
  example: Array<Example>;
  /** fetch aggregated fields from the table: "example" */
  example_aggregate: Example_Aggregate;
  /** fetch data from the table: "example" using primary key columns */
  example_by_pk?: Maybe<Example>;
};

export type Query_RootExampleArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};

export type Query_RootExample_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};

export type Query_RootExample_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "example" */
  example: Array<Example>;
  /** fetch aggregated fields from the table: "example" */
  example_aggregate: Example_Aggregate;
  /** fetch data from the table: "example" using primary key columns */
  example_by_pk?: Maybe<Example>;
};

export type Subscription_RootExampleArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};

export type Subscription_RootExample_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Example_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Example_Order_By>>;
  where?: InputMaybe<Example_Bool_Exp>;
};

export type Subscription_RootExample_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};
