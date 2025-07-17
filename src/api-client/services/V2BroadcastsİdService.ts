/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdService {
    /**
     * Get broadcast object
     * @returns string OK
     * @throws ApiError
     */
    public static getV2Broadcasts({
        id,
    }: {
        id: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * Updates the Broadcast objects fields if it's not null. The updated fields are as follows: name, description, userName, password, IP address, streamUrl of the broadcast. It also updates the social endpoints
     * @returns any OK
     * @throws ApiError
     */
    public static putV2Broadcasts({
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
            method: 'PUT',
            url: '/v2/broadcasts/{id}',
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
     * Delete broadcast from data store and stop if it's broadcasting
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2Broadcasts({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
