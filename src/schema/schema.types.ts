import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
}

export interface TMutation {
  updateTodo?: Maybe<TTodo>;
}


export interface TMutationUpdateTodoArgs {
  input: TUpdateTodoInput;
}

export interface TQuery {
  /** Get all todos */
  todos?: Maybe<Array<Maybe<TTodo>>>;
  /** Get a user by id */
  user?: Maybe<TUser>;
  /** Get all users */
  users?: Maybe<Array<Maybe<TUser>>>;
}


export interface TQueryUserArgs {
  id?: InputMaybe<Scalars['String']['input']>;
}

export interface TTodo {
  description?: Maybe<Scalars['String']['output']>;
  done?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
}

export interface TUpdateTodoInput {
  description?: InputMaybe<Scalars['String']['input']>;
  done?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
}

export interface TUser {
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  todos?: Maybe<Array<Maybe<TTodo>>>;
}

export type TUserAndTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TUserAndTodosQuery = { user?: { name?: string | null, id?: string | null, email?: string | null, todos?: Array<{ description?: string | null, done?: boolean | null } | null> | null } | null };


export const UserAndTodosDocument = gql`
    query UserAndTodos {
  user {
    name
    id
    email
    todos {
      description
      done
    }
  }
}
    `;

/**
 * __useUserAndTodosQuery__
 *
 * To run a query within a React component, call `useUserAndTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAndTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAndTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAndTodosQuery(baseOptions?: Apollo.QueryHookOptions<TUserAndTodosQuery, TUserAndTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TUserAndTodosQuery, TUserAndTodosQueryVariables>(UserAndTodosDocument, options);
      }
export function useUserAndTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TUserAndTodosQuery, TUserAndTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TUserAndTodosQuery, TUserAndTodosQueryVariables>(UserAndTodosDocument, options);
        }
export type UserAndTodosQueryHookResult = ReturnType<typeof useUserAndTodosQuery>;
export type UserAndTodosLazyQueryHookResult = ReturnType<typeof useUserAndTodosLazyQuery>;
export type UserAndTodosQueryResult = Apollo.QueryResult<TUserAndTodosQuery, TUserAndTodosQueryVariables>;