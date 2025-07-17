/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsConferenceRoomsListOffsetSizeService {
    /**
     * Gets the conference room list from database
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsConferenceRoomsList({
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
            url: '/v2/broadcasts/conference-rooms/list/{offset}/{size}',
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
