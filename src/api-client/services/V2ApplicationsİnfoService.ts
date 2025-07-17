/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApplicationsİnfoService {
    /**
     * Gets application info. Application info includes live stream count, vod count and application name.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2Applicationsİnfo({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/applications-info',
            headers: {
                'Accept': accept,
            },
        });
    }
}
