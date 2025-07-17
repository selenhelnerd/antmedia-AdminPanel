/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2SystemResourcesService {
    /**
     * Gets system resource information. Returns number of total live streams, cpu usage, system information, jvm information, file system information, license status, gpu status etc. Basically returns most of the information in one package.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2SystemResources({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/system-resources',
            headers: {
                'Accept': accept,
            },
        });
    }
}
