/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsWebrtcViewersListOffsetSizeService {
    /**
     * get Web RTC Viewer List
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsWebrtcViewersList({
        offset,
        size,
        accept,
        sortBy,
        orderBy,
        search,
    }: {
        offset: string,
        size: string,
        accept?: string,
        /**
         * field to sort
         */
        sortBy?: string,
        /**
         * asc for Ascending, desc Descending order
         */
        orderBy?: string,
        /**
         * Search parameter, returns specific items that contains search string
         */
        search?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/webrtc-viewers/list/{offset}/{size}',
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
                'search': search,
            },
        });
    }
}
