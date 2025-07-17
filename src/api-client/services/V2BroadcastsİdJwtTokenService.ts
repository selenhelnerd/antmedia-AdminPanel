/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdJwtTokenService {
    /**
     * Generates JWT token for specified stream. It's not required to let the server generate JWT. Generally JWT tokens should be generated on the client side.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsJwtToken({
        id,
        accept,
        expireDate,
        type,
        roomId,
    }: {
        id: string,
        accept?: string,
        /**
         * (Required) The expire time of the token. It's in unix timestamp seconds.
         */
        expireDate?: string,
        /**
         * (Required) Type of the JWT token. It may be play or publish
         */
        type?: string,
        /**
         * Room Id that token belongs to. It's not mandatory
         */
        roomId?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/{id}/jwt-token',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'expireDate': expireDate,
                'type': type,
                'roomId': roomId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
