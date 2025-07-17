/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdEndpointService {
    /**
     * add Endpoint V2
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsEndpoint({
        id,
        accept,
        rtmpUrl,
        requestBody,
    }: {
        id: string,
        accept?: string,
        /**
         * (Required) RTMP url of the endpoint that stream will be republished. If required, please encode the URL
         */
        rtmpUrl?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/{id}/endpoint',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'rtmpUrl': rtmpUrl,
            },
            body: requestBody,
        });
    }
    /**
     * remove Endpoint
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2BroadcastsEndpoint({
        id,
        accept,
        rtmpUrl,
    }: {
        id: string,
        accept?: string,
        /**
         * (Required) RTMP url of the endpoint that will be stopped.
         */
        rtmpUrl?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/{id}/endpoint',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'rtmpUrl': rtmpUrl,
            },
        });
    }
}
