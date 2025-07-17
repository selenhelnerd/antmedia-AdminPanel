/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2SystemStatusService {
    /**
     * Returns system information which includes many information such as JVM memory, OS information, Available File Space, Physical memory informations in detail.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2SystemStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/system-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
