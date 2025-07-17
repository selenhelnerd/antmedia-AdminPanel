/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdSubscribersService {
    /**
     * Add Subscriber to the requested stream
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsSubscribers({
        id,
        contentType,
        accept,
        requestBody,
    }: {
        id: string,
        contentType?: string,
        accept?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/{id}/subscribers',
            path: {
                'id': id,
            },
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     *  Removes all subscriber related with the requested stream
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2BroadcastsSubscribers({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/{id}/subscribers',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
