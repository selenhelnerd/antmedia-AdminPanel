/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdStreamİnfoService {
    /**
     * Returns the stream info(width, height, bitrates and video codec) of the stream
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsStreamİnfo({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/{id}/stream-info',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
