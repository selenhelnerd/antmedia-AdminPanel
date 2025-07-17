/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsCountService {
    /**
     * Get the total number of broadcasts
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsCount({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/count',
            headers: {
                'Accept': accept,
            },
        });
    }
}
