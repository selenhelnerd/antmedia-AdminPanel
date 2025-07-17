/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdStopService {
    /**
     * Stop streaming for the active stream. It both stops ingested(RTMP, WebRTC) or pulled stream sources (IP Cameras and Stream Sources)
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsStop({
        id,
        accept,
        requestBody,
    }: {
        id: string,
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/{id}/stop',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
}
