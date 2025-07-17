/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdSubtrackService {
    /**
     * Add a subtrack to a main track (broadcast).
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsSubtrack({
        id,
        accept,
        id,
        requestBody,
    }: {
        id: string,
        accept?: string,
        /**
         * (Required) Subtrack Stream Id
         */
        id?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/{id}/subtrack',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'id': id,
            },
            body: requestBody,
        });
    }
    /**
     * Delete a subtrack from a main track (broadcast).
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2BroadcastsSubtrack({
        id,
        accept,
        id,
    }: {
        id: string,
        accept?: string,
        /**
         * (Required) Subtrack Stream Id
         */
        id?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/{id}/subtrack',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'id': id,
            },
        });
    }
}
