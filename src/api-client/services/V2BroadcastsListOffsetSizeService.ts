/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsListOffsetSizeService {
    /**
     * Gets the broadcast list from database. It returns max 50 items at a time
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsList({
        offset,
        size,
        accept,
        typeBy,
        sortBy,
        orderBy,
        search,
    }: {
        offset: string,
        size: string,
        accept?: string,
        /**
         * Type of the stream. Possible values are "liveStream", "ipCamera", "streamSource", "VoD"
         */
        typeBy?: string,
        /**
         * Field to sort. Possible values are "name", "date", "status"
         */
        sortBy?: string,
        /**
         * "asc" for Ascending, "desc" Descending order
         */
        orderBy?: string,
        /**
         * Search parameter, returns specific items that contains search string
         */
        search?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/list/{offset}/{size}',
            path: {
                'offset': offset,
                'size': size,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'type_by': typeBy,
                'sort_by': sortBy,
                'order_by': orderBy,
                'search': search,
            },
        });
    }
}
