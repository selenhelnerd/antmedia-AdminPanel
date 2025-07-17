/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2EnterpriseEditionService {
    /**
     * Returns true if the server is enterprise edition.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2EnterpriseEdition({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/enterprise-edition',
            headers: {
                'Accept': accept,
            },
        });
    }
}
