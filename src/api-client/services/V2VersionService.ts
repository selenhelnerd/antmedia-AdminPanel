/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VersionService {
    /**
     * Returns the version of Ant Media Server.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2Version({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/version',
            headers: {
                'Accept': accept,
            },
        });
    }
}
