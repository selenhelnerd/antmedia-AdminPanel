/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2GpuStatusService {
    /**
     * Gets GPU information. Returns whether you have GPU or not. If yes, information of the gpu and the number of total gpus.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2GpuStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/gpu-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
