/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsStreamIdİpCameraErrorService {
    /**
     * Get IP Camera Error after connection failure. If returns true, it means there is an error. If returns false, there is no error
     * Notes here
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsİpCameraError({
        streamId,
        accept,
    }: {
        streamId: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/{streamId}/ip-camera-error',
            path: {
                'streamId': streamId,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
