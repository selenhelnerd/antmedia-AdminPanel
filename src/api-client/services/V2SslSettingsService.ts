/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2SslSettingsService {
    /**
     * Changes ssl settings. Sets ssl configuration type. After this method is called, server will be restarted.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2SslSettings({
        accept,
        domain,
        type,
        requestBody,
    }: {
        accept?: string,
        /**
         * (Required) SSL settings
         */
        domain?: string,
        type?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/ssl-settings',
            headers: {
                'Accept': accept,
            },
            query: {
                'domain': domain,
                'type': type,
            },
            body: requestBody,
        });
    }
}
