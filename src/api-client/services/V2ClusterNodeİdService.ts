/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ClusterNodeİdService {
    /**
     * delete Node
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2ClusterNode({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/cluster/node/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
