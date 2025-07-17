/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ThreadsService {
    /**
     * Returns processor's thread information. Includes number of dead locked threads, thread count, and thread peek count.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2Threads({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/threads',
            headers: {
                'Accept': accept,
            },
        });
    }
}
