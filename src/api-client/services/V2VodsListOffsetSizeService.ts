/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VodsListOffsetSizeService {
    /**
     *  Get the VoD list from database. It returns 50 items at max. You can use offset value to get result page by page
     * @returns any OK
     * @throws ApiError
     */
    public static getV2VodsList({
        offset,
        size,
        accept,
        sortBy,
        orderBy,
        streamId,
        search,
    }: {
        offset: string,
        size: string,
        accept?: string,
        /**
         * Field to sort. Possible values are "name", "date"
         */
        sortBy?: string,
        /**
         * "asc" for Ascending, "desc" Descening order
         */
        orderBy?: string,
        /**
         * Id of the stream to filter the results by stream id
         */
        streamId?: string,
        /**
         * Search string
         */
        search?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/vods/list/{offset}/{size}',
            path: {
                'offset': offset,
                'size': size,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'sort_by': sortBy,
                'order_by': orderBy,
                'streamId': streamId,
                'search': search,
            },
        });
    }
}
