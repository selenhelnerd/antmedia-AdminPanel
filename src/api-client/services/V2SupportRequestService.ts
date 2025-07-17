/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2SupportRequestService {
    /**
     * send Support Request
     * @returns any OK
     * @throws ApiError
     */
    public static postV2SupportRequest({
        accept,
        requestBody,
    }: {
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/support/request',
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
}
