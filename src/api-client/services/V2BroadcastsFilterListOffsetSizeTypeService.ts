/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsFilterListOffsetSizeTypeService {
    /**
     * Returns filtered broadcast list according to type. It's useful for getting IP Camera and Stream Sources from the whole list. If you want to use sort mechanism, we recommend using Mongo DB.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsFilterList({
        offset,
        size,
        type,
        accept,
        sortBy,
        orderBy,
    }: {
        offset: string,
        size: string,
        type: string,
        accept?: string,
        /**
         * field to sort
         */
        sortBy?: string,
        /**
         * asc for Ascending, desc Descending order
         */
        orderBy?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/filter-list/{offset}/{size}/{type}',
            path: {
                'offset': offset,
                'size': size,
                'type': type,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'sort_by': sortBy,
                'order_by': orderBy,
            },
        });
    }
}
